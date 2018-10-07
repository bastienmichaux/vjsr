import MyTemplate from '../models/template';

const myLib = (() => {
  'use strict';
  const getElement = (pojo: MyTemplate): HTMLElement => {
    const rootElem = document.createElement(pojo.element);
    if (pojo.textContent) {
      rootElem.textContent = pojo.textContent;
    }
    if (pojo.children) {
      const children = pojo.children;
      children.forEach((child) => {
        rootElem.appendChild(getElement(<MyTemplate>child));
      });
    }
    return rootElem;
  };
  return {
    getElement: getElement
  };
})();

export default myLib;
