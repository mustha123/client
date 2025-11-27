import React from 'react'

import { Routes,Route } from 'react-router-dom'

import Dashboard from '../AComponents/Dashboard'
import ClipDrawer from '../AComponents/ClipDrawer'
import AdminLogin from '../AComponents/AdminLogin'
import Viewuser from '../AComponents/Viewuser'
import Addcatogary from '../AComponents/Addcatogary'
import ViewCategory from '../AComponents/ViewCategory'
import Updatecategory from '../AComponents/Updatecategory'
import Addproduct from '../AComponents/Addproduct'
import Viewproduct from '../AComponents/Viewproduct'
import Updateproduct from '../AComponents/Updateproduct'
import Contextprovider from '../../../Contextprovider'






export default function Adminrouter() {
  return (
    <div>
      <ClipDrawer/>
      <Contextprovider>
<Routes>

       
      <Route path='/' element={<AdminLogin/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/clipdrawer' element={<ClipDrawer/>}/>
      <Route path='/AdminLogin' element={<AdminLogin/>}/>
      <Route path='/viewuser' element={<Viewuser/>}/>
      <Route path='/addcatogary' element={<Addcatogary/>}/>
      <Route path='/ViewCategory' element={<ViewCategory/>}/>
      <Route path='/updatecategory/:cid' element={<Updatecategory/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/viewproduct' element={<Viewproduct/>}/>
      <Route path='/updateproduct/:pid' element={<Updateproduct/>}/>


       </Routes>
       </Contextprovider>
    </div>
  )
}

