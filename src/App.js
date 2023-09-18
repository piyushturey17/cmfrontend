
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Dashboard/>
    </div>
  );
}

export default App;
