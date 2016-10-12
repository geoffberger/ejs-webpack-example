var tmpl = require('ejs!./templates/example.ejs');
var data = {
  name: 'Lebowski',
  drink: 'white russian',
  rug: 'tied the room together'
};
var html = tmpl(data);
document.getElementById('example').innerHTML = html;
