var express = require('express');
var app = express();
app.get('/getAllPosts', function (req, res) {
  const posts = {
    id:321,
    cattegory:"caps",
    imageURL:"testy"
  }
  res.send(posts);
});
app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});