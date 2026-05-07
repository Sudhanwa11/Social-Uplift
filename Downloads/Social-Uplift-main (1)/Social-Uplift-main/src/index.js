import 'plyr/dist/plyr.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the custom global styles
import './styles.css'; 
// Remove the imports for reportWebVitals and index.css (or check if index.css is empty and delete it)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);