import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { createHashHistory  } from 'history';
import App from './App';

// ReactDOM.render(<Router history={createHashHistory()}><App /></Router>, document.querySelector('#wrapper'));
ReactDOM.render(<HashRouter><App /></HashRouter>, document.querySelector('#wrapper'));

if (module.hot) {
    module.hot.accept();
}
