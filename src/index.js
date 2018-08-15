import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import App from './router';
import Main from "./views/main";
import {router} from "./router/config";
import { Provider } from "react-redux";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
            <Provider store={store}> 
                <Router>
                    <Main> 
                      <App routes = {router.routes}/>
                    </Main> 
               </Router>
            </Provider>, document.getElementById('root'));
registerServiceWorker();
