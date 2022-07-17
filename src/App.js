import logo from './logo.svg';
import './App.css';

import Balance from './components/balance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Balance />
      </header>
    </div>
  );
}

export default App;
