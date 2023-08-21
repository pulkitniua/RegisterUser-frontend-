
import './App.css';
import UserRegistration from './components/UserRegistration';
import Login from "./components/Login"

//import DropDownContainer from './components/DropDownContainer';
//import RadioContainer from './components/RadioContainer';
//import TextContainer from  './components/TextContainer';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FetchData from './components/FetchData';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserRegistration />} />
        <Route path="login" element={<Login />} />
        <Route path="/getData" element={<FetchData/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
