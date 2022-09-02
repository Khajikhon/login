import "./App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Person from "./components/Person";

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    let status = localStorage.getItem("status");
    if(!status){
        navigate("/login")
    }
  }, []);

  function clearFun() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <Link className='m-3' to={"/"}></Link>
          <Link className="m-3" to={"/person"}>
            Main1
          </Link>
          <Outlet />
          <button className="btn btn-info text-light m-2" onClick={() => clearFun()} style={{position: 'absolute', top: '0', left: '0'}} to={"/login"} >Tizmdan chiqish</button>
        </div>
      </div>
    </div>
  );
}

export default App;
