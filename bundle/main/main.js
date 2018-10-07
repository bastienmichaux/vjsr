"use strict";

var _view = _interopRequireDefault(require("../services/view"));

var _home = _interopRequireDefault(require("../views/home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (myViewService, myHomeView) {
  'use strict';

  document.title = 'lol';
  var view = myHomeView.template('lol');
  myViewService.setView(view);
})(_view.default, _home.default);