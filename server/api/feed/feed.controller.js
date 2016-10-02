'use strict';

import jsonpatch from 'fast-json-patch';
import axios from 'axios';

const feedApi = 'http://hackerearth.0x10.info/api/ctz_coders?type=json&query=list_submissions&page=';

// Gets a list of Feeds
export function index(req, res) {
  const page = req.params.page || '1';

  axios.get(`${feedApi}${page}`)
    .then((response) => {      
      res.json(response.data.websites);
    });
}
