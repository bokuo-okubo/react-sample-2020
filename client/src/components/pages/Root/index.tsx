import React from 'react';
import logo from 'src/assets/logo.svg';
import './index.css';

export const Root: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {process.env.REACT_APP_ENDPOINT_URL}
        </div>
      </header>
    </div>
  );
}
