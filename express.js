const express = require("express");
const app = express();

// Serve HTML pages
app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact-me.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

// 404 - fires for ANY request if this code block is reached
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

// listen for requests
app.listen(3000);
