var jade = require('jade');
var fs = require('fs');

var data = fs.readFileSync('listApis.json', { encoding:'utf8' });

data = JSON.parse(data)

// renderFile
var html = jade.renderFile('documentation.jade', data)

fs.writeFileSync("index.html", html)
