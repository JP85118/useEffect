import logo from './logo.svg';
import './App.css';
import RelojReact from './Components/RelojReact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RelojReact />
      </header>
    </div>
  );
}

export default App;
