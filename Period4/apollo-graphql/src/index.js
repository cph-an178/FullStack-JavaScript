import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Queries from './Queries';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Queries />, document.getElementById('root'));
registerServiceWorker();
