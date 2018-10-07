"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var myHomeView = function () {
  'use strict';

  var template = function template(param) {
    return {
      element: 'div',
      children: [{
        element: 'p',
        textContent: 'Paragraph 1'
      }, {
        element: 'p',
        textContent: param
      }]
    };
  };

  return {
    template: template
  };
}();

var _default = myHomeView;
exports.default = _default;