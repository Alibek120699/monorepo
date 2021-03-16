import logo from './logo.svg';
import './App.css';

import { formatPhone } from 'utils/dist';

function App() {
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
          {formatPhone('87474137345')}
        </a>
      </header>
    </div>
  );
}

export default App;
