"use strict";

var _app = require("./src/app");

var _config = require("./src/config");

var listener = _app.app.listen(_config.port, function () {
  console.log("\u2705 Listening on port ".concat(listener.address().port));
});