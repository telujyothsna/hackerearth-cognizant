import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  page = 1;
  feedItems = [];
  icons = {};
  topics = [];
  languages = [];
  statsAvailable = false;
  stats = {};

  /*@ngInject*/
  constructor($http, $scope, socket, $localForage, $q) {
    const self = this;
    this.$http = $http;
    this.socket = socket;
    this.$localForage = $localForage;
    this.$q = $q;
    this.$localForage.clear();

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('feed');
    });

    self.feedItems = {
      numLoaded_: 0,
      toLoad_: 0,
      items: [],
      callInProgress: false,

      getItemAtIndex: function(index) {

        if (index > self.feedItems.numLoaded_) {
          self.feedItems.fetchMoreItems_(index);
          return null;
        }
        return self.feedItems.items[index];
      },

      getLength: function() {
        return self.feedItems.numLoaded_ + 5;
      },

      fetchMoreItems_: function(index) {
        const url = `/api/feed/${self.page}`;
        if (self.feedItems.toLoad_ < index && !self.callInProgress) {
          self.feedItems.toLoad_ += 5;
          self.callInProgress = true;

          self.$http.get(url)
            .then((response) => {
              const items = response.data;
              self.feedItems.items = self.feedItems.items.concat(items);
              self.page++;
              self.feedItems.numLoaded_ = self.feedItems.items.length;
              self.callInProgress = false;

              self.topics = self.uniqueTopics(self.topics.concat(items.map(function(item) {
                self.languages.push({'lang' : item.language })

                return {
                  title: item.title
                };
              })), 'title');

              self.languages = self.uniqueTopics(self.languages, 'lang')
            });
        }
      }
    };
  }

  uniqueTopics(collection, keyname) {
    var output = [],
      keys = [];

    angular.forEach(collection, function(item) {
      var key = item[keyname];
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        output.push(item);
      }
    });
    return output;
  };



  $onInit() {
    this.fetchIconMap();
    this.$localForage.getItem('stats')
      .then((value) => {
        if(value){
          console.log(value)
          this.stats = value;
        } else {
          this.fetchStats();
        }
      });
    
  }

  fetchIconMap() {
    this.$http.get('/api/iconmap')
      .then((response) => {
        this.icons = response.data;
      })
  }

  fetchFeed() {
    this.$http.get(`/api/feed/${this.page}`)
      .then((response) => {
        this.feedItems.items = this.feedItems.items.concat(response.data);
        this.page++;
      });
  }

  fetchStats(){
    var numPages = 10;
    var i;
    var calls = [];
    var prom;
    var data = [];
    for(i=1; i<=numPages; i++ ){
      prom = this.$http.get(`/api/feed/${i}`)
        .then((response) => {
          data = data.concat(response.data);
        });
      calls.push(prom);
    }

    this.$q.all(calls)
      .then(() => {
        this.processAllData(data);
      });
  }

  count(ary, classifier) {
    return ary.reduce(function(counter, item) {
        var p = (classifier || String)(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
  }

  processAllData(data){
    const processedData = {
      "top-5-languages" : [],
      "top-2-submissions-attempted": [],
      "submissions-per-level": {
        "Easy": 0,
        "Medium": 0,
        "Hard": 0
      },
      "total-submissions": 0
    };
    const langsCount = this.count(data, function(item) { return item.language });
    const titlesCount = this.count(data, function(item) { return item.title });
    const diffCount = this.count(data, function(item) { return item.metadata.level });

    const sortedLangs = Object.keys(langsCount)
      .sort(function(a,b){
        return langsCount[a] - langsCount[b];
      }).reverse().map((item) => {
        var tmp = {};
        tmp[item] = langsCount[item];

        return tmp;
      });

    const sortedSubmissions = Object.keys(titlesCount)
      .sort(function(a,b){
        return titlesCount[a] - titlesCount[b];
      }).reverse().map((item) => {
        var tmp = {};
        tmp[item] = titlesCount[item];

        return tmp;
      });
    


    processedData["top-5-languages"] = sortedLangs.slice(0,5);
    processedData["top-2-submissions-attempted"] = sortedSubmissions.slice(0,2);
    processedData["submissions-per-level"] = diffCount;
    data.map((item) => {
      processedData["total-submissions"] = processedData["total-submissions"] + item.metadata.users_attempted;
    });
    this.$localForage.setItem('stats', processedData);
    this.stats = processedData;
  }


}

export default angular.module('hackerEarthCognizantApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,

  })
  .name;