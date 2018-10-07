"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lib = _interopRequireDefault(require("../lib/lib"));

var _constants = _interopRequireDefault(require("../constants/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myViewService = function (myLib, myConstants) {
  'use strict';

  var setView = function setView(view) {
    var appRoot = document.getElementById(myConstants.appRootId);

    while (appRoot.firstChild) {
      appRoot.removeChild(appRoot.firstChild);
    }

    appRoot.appendChild(myLib.getElement(view));
  };

  return {
    setView: setView
  };
}(_lib.default, _constants.default);

var _default = myViewService;
exports.default = _default;