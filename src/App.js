
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';
import TestListComponent from './components/test/TestListComponent';
import {Routes,Route,BrowserRouter} from "react-router-dom";
// import { Provider } from 'react-redux';
// import store from './components/store';

function App() {
  return (
 
        <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/listTest" element={<TestListComponent/>}/>
        </Routes>
      </BrowserRouter>

      
    
  );
}

export default App;
