import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../UComponents/Home'
import Register from '../UComponents/Register'
import Header from '../UComponents/Header'
import Login from '../UComponents/Login'
import URegister from '../UComponents/URegister'
import Manageuser from '../UComponents/Manageuser'
import Contextprovider from '../../../Contextprovider'


export default function UserRouter() {
  const location = useLocation()
  const noappbarroutes = ['/login', '/register']
  const notfooterroutes = ['/login', '/register']

  return (
    <div>
     <Header/>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
<Contextprovider>
      <Routes>
       
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/uregister" element={<URegister/>} />
        <Route path="/manageuser" element={<Manageuser/>} />
       
      </Routes>
</Contextprovider>
  
    </div>
  )
}
