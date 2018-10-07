"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var myLib = function () {
  'use strict';

  var getElement = function getElement(pojo) {
    var rootElem = document.createElement(pojo.element);

    if (pojo.textContent) {
      rootElem.textContent = pojo.textContent;
    }

    if (pojo.children) {
      var children = pojo.children;
      children.forEach(function (child) {
        rootElem.appendChild(getElement(child));
      });
    }

    return rootElem;
  };

  return {
    getElement: getElement
  };
}();

var _default = myLib;
exports.default = _default;