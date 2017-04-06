const http = require('http');

const html = `
 <!doctype html>
<html>
  <head>
    <meta charset="utf-8">
 <title>Node JS Webserver</title>
  <link rel="stylesheet" href="app.css">
</head>

  <body>
  <header>
  <h2>Node JS WebServer</h2>
  </header>
  <div class="wrapper">
  <p>Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit. 
  Quas, nam cumque quam a sint iste architecto. 
  Incidunt animi accusamus ipsum, a obcaecati doloremque, ab iusto tempore. Et modi vero eligendi.</p>
  <button>Click</button>
  <script src="app.js"></script>
  </div>
  </body>
  </html>
`;
const css = `
body {
	margin: 0;
	padding: 0;
	background-color: #f8f8f8;
	color: #232323;
  font-size:17px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
}
.wrapper {
   max-width: 1170px;
   margin-left: auto;
   margin-right:auto;
   padding-top: 15px;
}
button {
    background-color: #4CAF50;
    border: 2px solid transparent;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
}
button:hover {
    background-color: white; 
    color: black; 
    border: 2px solid #4CAF50;
}
header {
	width: 100%;
	padding: 20px 0;
	background-color:#43853D;
	text-align: center;
}
header h2 {
	color: #fff;
	font-family: Verdana, sans-serif;
}

`;
const js = `
const button = document.querySelector('button');
button.addEventListener('click', event => alert('Node JS in actiune'));
`;
const server = http.createServer( (req, res) => {
	switch (req.url) {
		case '/' :
		 res.writeHead(200, {'Content-Type' : 'text/html'});
         res.end(html);

         case '/app.css':
         res.writeHead(200, {'Content-Type' : 'text/css'});
         res.end(css);

         case '/app.js':
         res.writeHead(200, {'Content-Type' : 'text/javascript'});
         res.end(js);

         default:
         res.writeHead(404, {'Content-Type' : 'text/plain'});
         res.end('404 Not Found');
	}
  
}).listen(3000, () => console.log('Serverul este activ'));