var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
    'article-one': {
        title: 'Article one | Piyush',
        heading: 'Article One',
        date: '12 june 2016',
        content: `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>`
    },
    'article-two': {
        title: 'Article two | Piyush',
        heading: 'Article two',
        date: '12 june 2016',
        content: ``
    },
    'article-three': {
        title: 'Article three | Piyush',
        heading: 'article-three',
        date: '12 aug 2017',
        content: ``
    }
};


function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;


    var htmlTemplate =
        `<!DOCTYPE html>
  <html>

  <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <link rel="stylesheet" href="/ui/style.css">
  </head>

  <body>
      <div>
          <a href="/">Home</a>
      </div>
      <div>
          <h3>this is ${heading}</h3>
      </div>
      <div>
      ${date}
      </div>

      ${content}

  </body>

  </html>
  `;
    return htmlTemplate;
}

app.get('/:articleName', function(req, res) {

    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function() {
    console.log(`IMAD course app listening on port ${port}!`);
});
