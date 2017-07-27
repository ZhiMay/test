## handlebars generate html: 
 https://github.com/patrickkettner/grunt-compile-handlebars

## handlebars a html demo: 
  https://stackoverflow.com/questions/30030551/node-express-how-to-render-handlebars-html-page-to-file
    eg:
      var Handlebars = require('handlebars');

      var source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
          "{{kids.length}} kids:</p>" +
          "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
      var template = Handlebars.compile(source);

      var data = { "name": "Alan", "hometown": "Somewhere, TX",
          "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
      var result = template(data);


      var fs = require('fs');
          fs.writeFile("test.html", result, function(err) {
          if(err) {
              return console.log(err);
          }
      });
## node exports:
  http://blog.csdn.net/pwiling/article/details/51958693 

