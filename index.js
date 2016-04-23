'use strict';
const fs = require('fs');
const util = require('util');

var obj =
{
  "fonts": [{
    "Roboto-Regular": {
      "family": "roboto",
      "format": [".woff2", ".woff", ".eot"]
    }
  }, {
    "OpenSans-Light": {
      "family": "opensans",
      "format": [".woff2", ".woff"]
    }
  }],
  "systemFonts":{
    "Nexa-Light": {
      "format": ["woff2"]
    }
  },
  "output": {
    "fonts": "fonts/",
    "fontface": "css/"
  }
}

class jsonEditor{
  static get(property){
    console.log(obj[property]);
  }

  static addFont(family, newObj){
    obj.fonts.push(newObj)
  }

  static removeFont(font){
    var index = -1;
    for (var i = 0; i < obj.fonts.length; i++)
      if (Object.keys(obj.fonts[i]).toString() === font)
        index = i;

    if (index > -1)
      obj.fonts.splice(index, 1);
  }
}

console.log('Getting fonts...');
jsonEditor.get('fonts');
console.log('Adding Roboto-Bold...')
jsonEditor.addFont('roboto', {'Roboto-Bold': {'family': 'roboto', 'format': ['.woff2, .woff', '.eot']}});
console.log('Deleting Roboto-Regular...');
jsonEditor.removeFont('Roboto-Regular');

console.log(util.inspect(obj.fonts, {depth: null, showHidden: true}))

fs.writeFile('test.json', JSON.stringify(obj));
