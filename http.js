const fs = require('node:fs');
const http = require('node:http');

const port = '8000';
const homePage = fs.readFileSync('./index.html');
const styles = fs.readFileSync('./style.css');
const mainApp = fs.readFileSync('./app.js');
const template = fs.readFileSync('./calc/calc.template.js');
const component = fs.readFileSync('./calc/calc.component.js');


const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  }
  if (url === '/app.js') {
    res.writeHead(200, { 'content-type': 'application/javascript' });
    res.write(mainApp);
    res.end();
  }
  if (url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(styles);
    res.end();
  }
  if (url === '/calc/calc.template.js') {
    res.writeHead(200, { 'content-type': 'application/javascript' });
    res.write(template);
    res.end();
  }
  if (url === '/calc/calc.component.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(component);
    res.end();
  }
})

server.listen(port);

