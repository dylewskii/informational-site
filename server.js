const http = require("http");
const fs = require("fs");

// const PORT = process.env.PORT || 3000;
const PORT = 3000;

// Status Codes:
// 100 = Informational
// 200 = Success
// 300 = Redirects
// 400 = User/Client Error
// 500 = Server Error

const server = http.createServer((req, res) => {
  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/contact":
      path += "contact-me.html";
      res.statusCode = 200;
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Can't retrieve data");
      res.end();
    }

    res.write(data);
  });
});

server.listen(PORT, () => console.log(`server running on port: ${PORT}`));
