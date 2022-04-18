import React from 'react';
import myPic from '../../../src/Images/Co-6005=.jpg'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className=''>
           <div className='container py-5 aboutMe'>
           <div>
                <img className='img-fluid w-75' src={myPic} alt="" />
            </div>
            <div className='w-50'>
                <h1>Md Abbas Ali</h1>
                <h3>Web Developer and Designer</h3>
                <p>Over 1+ years of experience in Software industry (experience in the design and development). I am working various kind of web based application. I am expert in Html:5, Css3, JavaScript,Tailwind,React,Redux,Firebase,Firebase Hooks, Axious.My future plan is a Full Stack Develper.</p>
            </div>
           </div>
        </div>
    );
};

export default AboutMe;