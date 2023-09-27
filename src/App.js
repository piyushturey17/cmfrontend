
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';
import TestListComponent from './components/test/TestListComponent';
// import CreateTestComponent from './components/test/CreateTestComponent';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import AddTestComponent from './components/test/AddTestComponent';
import { Provider } from 'react-redux';
import store from './store';
import UpdateTestComponent from './components/test/UpdateTestComponent';

function App() {
  return (
 
      <Provider store={store}>
        <BrowserRouter>
          <HeaderComponent/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/listTest" element={<TestListComponent/>}/>
            <Route path="/addTest" element={<AddTestComponent/>}/>
            <Route path="/updateTest/:id" element={<UpdateTestComponent/>}/>
          </Routes>
         </BrowserRouter>
      </Provider>

      
    
  );
}

export default App;
