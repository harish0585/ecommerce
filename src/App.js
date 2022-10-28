import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar.jsx/Navbar';
import { Routing } from './routing/Routing';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
