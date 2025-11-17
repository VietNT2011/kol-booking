import React from 'react'
import banner from '../../assets/herro-banner_1.png'
import tvc from '../../assets/hero-tvc.mov'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <div className="home__hero">

            <div className="home__hero-video">
                <video autoPlay loop muted playsInline src={tvc}/>
            </div>

            <div className="home__hero-banner">
                <img src={banner} alt="" />
            </div>

        </div>
        

    </div>
  )
}

export default Home