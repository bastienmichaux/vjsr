import myLib from '../lib/lib';
import myConstants from '../constants/constants';

const myViewService = ((myLib, myConstants) => {
  'use strict';
  const setView = (view) => {
    const appRoot = document.getElementById(myConstants.appRootId);
    while (appRoot.firstChild) {
      appRoot.removeChild(appRoot.firstChild);
    }
    appRoot.appendChild(myLib.getElement(view));
  };
  return {
    setView: setView
  };
})(myLib, myConstants);

export default myViewService;
