interface MyTemplate {
  element: string;
  textContent: string;
  children: object[];
}

const myConstants = (() => {
  'use strict';
  return {
    appRootId: 'app-root',
    appTitle: 'rpg',
    appVersion: '0.0.0'
  };
})();

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

const myViewService = ((myLib) => {
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
})(myLib);

const myHomeView = (() => {
  'use strict';
  const template = (param) => {
    return {
      element: 'div',
      children: [
        {
          element: 'p',
          textContent: 'Paragraph 1'
        },
        {
          element: 'p',
          textContent: param
        }
      ]
    };
  };
  return {
    template: template
  };
})(); 

((myViewService, myHomeView) => {
  'use strict';
  document.title = 'lol';
  const appRoot = document.getElementById(myConstants.appRootId);
  const view = myHomeView.template('lol');
  myViewService.setView(view);
})(myViewService, myHomeView);
