// Generate CSS
require('../sass/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './routes';
import Providers from './providers';

ReactDOM.render(<Providers><App /></Providers>, document.getElementById('main'))