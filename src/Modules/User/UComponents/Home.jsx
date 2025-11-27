import React from 'react'
import hello from '../../../Assets/blurimg.jpg'

export default function Home() {
  return (
    <div style={{backgroundColor:'#e798984d',height:'100vh',marginTop:'-25px'}}>
       <h1>Welcome to Home Page</h1>
    <div style={{backgroundImage:`url(${hello})`,height:'50vh',marginRight:'800px',marginLeft:'50px',paddingTop:'100px'}}>
     </div>
    </div>
  )
}
