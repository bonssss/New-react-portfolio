import React from 'react'
import profileimage from '../../assets/pp.jpg'
import './about.css'

export const About = () => {
  return (
    <>
    <div className='about-maincontainer' id='about'>
  <div className="about-content">
    <div className="about-text">
      <h1 className='about-me'>About ME</h1>
      <div className="aboutme-note">
    
Hello, I'm Bonsa Desalegn, a dynamic software engineer
 specializing in website and mobile application development. 
 With expertise in HTML, CSS, JavaScript, and mobile frameworks,
  I craft engaging digital experiences tailored to meet clients' needs. 
 I've honed my skills 
  in building responsive websites and intuitive mobile apps, collaborating 
  closely with clients to bring their visions to life. Passionate about staying
   ahead of industry trends, I thrive on delivering innovative solutions
 that elevate user experiences. Let's collaborate to turn your ideas into reality!
      </div>
    </div>
    <div className='img-pro'>
      <img className="profile-image" src={profileimage} alt="profile page" />
    </div>
  </div>
</div>

    </>
  )
}
