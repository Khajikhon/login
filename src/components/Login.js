import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate =useNavigate()
    const[login, setLogin] = useState()
    const[password, setPassword] = useState()

    function checkPass() {
      //login and password = admin
        if(login === "admin" && password === "admin"){
            localStorage.setItem("status", login)
             navigate("/")
        }else{
            alert("Login yoki parol xato")
        }
        
    }
  return (
    <div className='containers'>
      <div className='rows justify-content-center' style={{marginTop: '15%'}}>
        <div className='cards p-4'>
            <img width={"150"} className="justify-content-center" src="http://cdn.onlinewebfonts.com/svg/img_311846.png" />
            <input onChange={(val) => setLogin(val.target.value) } type={"text"} placeholder="Login" className='m-3' />
            <input onChange={(val) => setPassword(val.target.value)} type={"password"} placeholder="Parol" className='m-2 ' />
            <button onClick={() => checkPass()} float="end" className='tugma btn btn-dark' >Tizimga kirish</button>
        </div>
      </div>
    </div>
  )
}
