import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import { persistor, store } from './utils/redux/store';
import Layout from './components/Layout/Layout';

ReactDOM.render(
    <Provider store={ store }>
        <PersistGate
            loading={<LoadingSpinner />}
            persistor={ persistor }
        >
            <Router history={ history }>
                <Layout>
                    <App/>
                </Layout>
            </Router>
        </PersistGate>
    </Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
