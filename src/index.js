import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Photo from "./Components/Photo"
import Card from './Components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Photo />
      <Card />
  </React.StrictMode>
);
