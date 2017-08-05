import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./Store"
import registerServiceWorker from './registerServiceWorker';
import ControlPanel from "./ControlPanel";
// import Provider from "./Provider";
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
