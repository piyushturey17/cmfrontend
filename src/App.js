
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
import AddBatchComponent from './components/batch/AddBatchComponent';
import BatchListComponent from './components/batch/BatchListComponent';
import UpdateBatchComponent from './components/batch/UpdateBatchComponent';

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
            {/* <Route path="/listTest" element={<BatchListComponent/>}/> */}
            <Route path="/addBatch" element={<AddBatchComponent/>}/>
            <Route path="/listBatch" element={<BatchListComponent/>}/>
            <Route path="/updateBatch/:id" element={<UpdateBatchComponent/>}/>
          </Routes>
         </BrowserRouter>
      </Provider>

      
    
  );
}

export default App;
