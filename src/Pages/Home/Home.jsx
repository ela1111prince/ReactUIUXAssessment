import React from 'react'
import HomeBG from "./homeBG.jpg";

function Home() {
  return (
    <div className="HomeBG">
        <div className='HomeContent'>
        <h2>Welcome to Indpro Ekart!!!</h2>
        <button className="PrimaryBTN">Shop Now</button>
        </div>
    <img   src={HomeBG} />
    
    
    </div>
  )
}

export default Home