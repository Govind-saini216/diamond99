import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import './responsive.css';
// import './custom.css';
// import './style.css'
// import './app.css'
import App from './App';
// Add this to your app's entry file, e.g., App.js or index.js
const setAppHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
};

// Set on load
setAppHeight();

// Update on resize
window.addEventListener('resize', setAppHeight);
console.log(setAppHeight);
<meta name="theme-color" content="#f0f0f0" />


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

