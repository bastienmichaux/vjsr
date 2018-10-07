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

export default myHomeView;
