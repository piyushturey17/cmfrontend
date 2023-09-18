
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';
import TestListComponent from './components/test/TestListComponent';
import {BrowserRouter as Router,Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <HeaderComponent/>
        {/* <Dashboard/> */}
        <Route path="/" component={Dashboard}/>
        <Route path="/listTest" component={TestListComponent}/>
        {/* <TestListComponent/> */}
        {/* <Route exact path="/listTest" component={TestListComponent} /> */}
    </Router>
      
    
  );
}

export default App;
