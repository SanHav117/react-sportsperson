import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TextFile from './TextFile';

import './page.css';
import Information from './Information.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Information 
      title="MS Dhoni" />
  </>
)



