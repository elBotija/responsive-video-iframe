import React from 'react';
import ReactDOM from 'react-dom';
import ResponsiveVideoIframe from './lib/components/ResponsiveVideoIframe';
import reportWebVitals from './reportWebVitals';
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Responsive video iframe</h1>
      <p>
        ResponsiveVideoIframe is a React component to create a responsive viedo iframe, preserving the aspect ratio (16:9).<br/><br/>
        <b>Resize window!</b>
      </p>
      <ResponsiveVideoIframe url="https://www.youtube.com/embed/WSLMN6g_Od4" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
