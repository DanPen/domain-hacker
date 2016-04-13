var dns = require("dns")
var words = require('wordlist-english').english

// var prefixes = ["yotta", "zetta", "exa", "peta", "tera", "giga", "mega",
//   "kilo", "hecto", "deka", "deci", "centi", "milli", "micro", "nano",
//   "pico", "femto", "atto", "zepto", "yocto"]
//
// var units = ["meter", "gram", "second", "ampere", "kelvin", "mole",
//   "candela", "radian", "steradian", "hertz", "newton", "pascal", "joule",
//   "watt", "colomb", "volt", "farad", "ohm", "siemens", "weber", "henry",
//   "lumen", "lux", "becquerel", "gray", "sievert", "katal"]
//
// for (var i=0; i<prefixes.length; i++) {
//   for (var j=0; j<units.length; j++) {
//     checkAvailable(prefixes[i] + units[j] + ".com")
//   }
// }

const tld = ['co', 'de', 'da', 'le', 've']

for (var i=0; i<words.length; i++) {
  var first = words[i].substr(0, words[i].length-2)
  var last = words[i].substr(words[i].length-2, words[i].length)

  if (last == 'ar')
    if (first.length <= 8)
      checkAvailable(first+'.ar')
}


var i = 0

function checkAvailable (name) {
  dns.resolve4(name, function (e, res) {
    if (e && e.errno == 'ENOTFOUND')
        console.log(name)
  })
}
