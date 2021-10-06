"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _routes = _interopRequireDefault(require("./routes"));

var App = /*#__PURE__*/function () {
  function App() {
    (0, _classCallCheck2["default"])(this, App);
    this.server = (0, _express["default"])();
    this.app = _http["default"].createServer(this.server);
    this.init();
  }

  (0, _createClass2["default"])(App, [{
    key: "init",
    value: function init() {
      console.log('ENV:', process.env.NODE_ENV); // main endpoint

      this.server.use('/api/', _routes["default"]);
    }
  }]);
  return App;
}();

module.exports = new App();