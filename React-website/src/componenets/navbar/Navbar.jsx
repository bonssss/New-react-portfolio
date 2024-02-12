import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'visible' : 'hidden';
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <>
      <div className="main-nav-container">
        <div className='navbar'>
          <div className="logo">
            <a href="#landingpage"><h3>BoNapp</h3></a>
          </div>
          <div className="menu-toggle" onClick={toggleNavbar}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} />
          </div>
          <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
            <div className='list-items'>
              <ul>
                <li className="nav-listitems"><a className="listitem-link" href="#landingpage" onClick={closeNavbar}> Home</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#about" onClick={closeNavbar}> About</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#project" onClick={closeNavbar}>Project</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#skill" onClick={closeNavbar}>Skill</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#contact" onClick={closeNavbar}>Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
