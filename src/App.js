import logo from './logo.svg';
import './App.css';
import Adminrouter from './Modules/Admin/ARoutes/Adminrouter';
import UserRouter from './Modules/User/URoutes/UserRouter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
       <div className="App">
      <BrowserRouter>
      <Routes>
       
       <Route path="/admin/*" element={<Adminrouter/>}/>
       <Route path="/*" element={<UserRouter/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
