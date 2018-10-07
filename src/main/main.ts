import myViewService from '../services/view';
import myHomeView from '../views/home';

((myViewService, myHomeView) => {
  'use strict';
  document.title = 'lol';
  const view = myHomeView.template('lol');
  myViewService.setView(view);
})(myViewService, myHomeView);
