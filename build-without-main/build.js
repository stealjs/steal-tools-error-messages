var path = require("path");
var stealTools = require("steal-tools");

var config = {
  config: path.join(__dirname, "stealconfig.js")
};

stealTools.build(config)
  .then(function() {
    console.log("steal-tools build finished successfully!");
  })
  .catch(function(err) {
    console.error(err);
  });
