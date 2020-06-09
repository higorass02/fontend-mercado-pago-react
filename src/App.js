import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-roboto'

const App = () => (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );


export default App;
