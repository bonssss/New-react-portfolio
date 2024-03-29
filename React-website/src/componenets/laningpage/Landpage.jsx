import React, { useState, useEffect } from "react";
import "./land.css";
import cv from '../../assets/bons cv2.pdf'
import { FaLinkedin, FaInstagram, FaTelegram, FaGithub } from 'react-icons/fa';

const Landpage = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const roles = [
    "Front-end Developer",
    "Backend Developer",
    "Full-stack Developer",
    "App Developer",
    "Graphics Designer",
    "Bonsa Desalegn"
  ];
  const intervalDuration = 100; // Time interval between character displays
  const finalWordDuration = 2000; // Time interval for displaying the full word

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (roleIndex + 1) % roles.length;
      if (displayedRole !== roles[roleIndex]) {
        setDisplayedRole((prevRole) => roles[roleIndex].substring(0, prevRole.length + 1));
      } else {
        setTimeout(() => {
          setRoleIndex(nextIndex);
          setDisplayedRole("");
        }, finalWordDuration);
      }
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [displayedRole, roleIndex, roles, finalWordDuration, intervalDuration]);

  return (
    <>
      <div id="landingpage">
        <section id="hero">
          <div className="hero-text">
            <h1>Welcome to My Portfolio</h1>
            <h3>I am {displayedRole ? ` ${displayedRole}`:""}</h3>
            <p>Showcasing my work and skills</p>

            <a href="#project" className="btn">
              View Portfolio
            </a>
            <a href={cv} className="btn">
              Download CV
            </a>
            <div className="contact-me">
              <button>
                <a href="#contact">Contact Me</a>
              </button>
              <div className="social-icons">
               <a  className="social-media" target="_blank" href="@bons2122"><FaTelegram /></a> 
                <a  className="social-media" target="_blank" href="https://www.instagram.com/bonsadesalegn?igsh=MWZ1YzJ5NHM2ZnJ0OQ=="><FaInstagram/></a>
               <a className="social-media" target="_blank" href="https://www.linkedin.com/in/bonsa-desalegn-90175b257/"><FaLinkedin/></a> 
               <a className="social-media"  target="_blank" href="https://github.com/bonssss"><FaGithub/></a> 
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landpage;
