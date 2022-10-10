import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "../src/context/UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";


export default function App(){
    const [token, setToken] = useState('');
    const [name, setName] = useState(null)
    return (
        <BrowserRouter>
          <UserContext.Provider value={{token, setToken, name, setName}}>
            <Routes>
              <Route path="/register" element={<Register/>} />
              <Route path="/login" element={<Login/>} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      );
}
