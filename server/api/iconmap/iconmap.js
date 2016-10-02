const icons = [{
    id: 1,
    language: "GNU C++11",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/cpp.png"
}, {
    id: 2,
    language: "GNU C++",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/cpp.png"
}, {
    id: 3,
    language: "MS C++",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/cpp.png"
}, {
    id: 4,
    language: "Java 7",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/java.png"
}, {
    id: 5,
    language: "Python 3",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/python.svg"
}, {
    id: 6,
    language: "Java 8",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/java.png"
}, {
    id: 7,
    language: "MS C#",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/cs.png"
}, {
    id: 8,
    language: "FPC",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/pascal.png"
}, {
    id: 9,
    language: "Mono C#",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/cs.png"
}, {
    id: 10,
    language: "GNU C",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/c.png"
}, {
    id: 11,
    language: "Python 2",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/python.svg"
}, {
    id: 12,
    language: "GNU C11",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/c.png"
}, {
    id: 13,
    language: "Delphi",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/delphi.png"
}, {
    id: 14,
    language: "Ruby",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/ruby.png"
}, {
    id: 15,
    language: "PHP",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/php.png"
}, {
    id: 16,
    language: "PyPy 3",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/python.svg"
}, {
    id: 17,
    language: "JavaScript",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/javascript.png"
}, {
    id: 18,
    language: "D",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/d.png"
}, {
    id: 19,
    language: "PyPy 2",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/python.svg"
}, {
    id: 20,
    language: "Haskell",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/haskell.png"
}, {
    id: 21,
    language: "Scala",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/scala.png"
}, {
    id: 22,
    language: "Ocaml",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/ocaml.png"
}, {
    id: 23,
    language: "Perl",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/perl.png"
}, {
    id: 24,
    language: "Go",
    icon: "https://hackerearth.0x10.info/dump/jda/language_icons/go_lang.png"
}];

const IconMap = () => {
    var ret = {}
    icons.map(function(item) {
        ret[item.language] = {
            icon: item.icon,
            language: item.language
        };
    });

    return ret;
};

module.exports = IconMap;