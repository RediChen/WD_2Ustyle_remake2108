import React from 'react';
import ReactDOM from 'react-dom';
import LayoutBase from './00_layoutBase/LayoutBase';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/style.css';
import { renderRoutes } from 'react-router-config';
import routeConfig from './routeConfig';

const basename = process.env.PUBLIC_URL;

//* BigPicture
const App = () =>
  <Router basename={basename}>
    <LayoutBase>
      {renderRoutes(routeConfig)}
    </LayoutBase>
  </Router>

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
