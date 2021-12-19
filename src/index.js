import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom'
import { LocationProvider } from './context/locationContext';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
       <LocationProvider/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
