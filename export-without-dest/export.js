var path = require("path");
var stealTools = require("steal-tools");

var exportPromise = stealTools.export({
  steal: {
    main: "main",
    config: path.join(__dirname, "package.json!npm")
  },
  options: {
    verbose: true
  },
  outputs: {
    amd: {
      format: "amd",
      graphs: ["main"],
    }
  }
});

exportPromise
  .then(function() {
    console.log("steal-tools export finished successfully!");
  })
  .catch(function(err) {
    console.error(err);
  });
