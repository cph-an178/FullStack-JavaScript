import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Queries from './Queries';
import Mutations from './Mutations';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mutations />, document.getElementById('root'));
registerServiceWorker();
