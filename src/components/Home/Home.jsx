import React from 'react'
import myImage from './myprofile.png'
import './Home.scss'
function Home() {
    return (
        <div className="home">
            <div className="header-content">
                <span className="title">
                    <img className="my-face" src={myImage} alt="Monica Lent's Website" />
                    Hi, 
                    <span className='name'>i'm Mohamed Diab</span>
                    <span className='job-title'>Front-End developer</span>
                </span>
           
                </div>
        </div>
    )
}

export default Home
