import React from "react";

import Register from './Components/Register';
import Home from './Components/Home';

import './index.css';

import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return  <div>{
                user ? <Home /> : <Register />
              }
          </div>;
};

export default App;
