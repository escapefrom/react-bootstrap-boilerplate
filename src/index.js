import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import registerServiceWorker from './registerServiceWorker';
import RouterOutlet from './router/RouterOutlet';

ReactDOM.render(<RouterOutlet />, document.getElementById('root'));
registerServiceWorker();
