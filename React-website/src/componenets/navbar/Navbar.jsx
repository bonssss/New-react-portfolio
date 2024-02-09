import React, { useState } from 'react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'visible' : 'hidden';
  };

  return (
    <>
      <div className="main-nav-container">
        <div className='navbar'>
          <div className="logo">
            <h3>BoN</h3>
          </div>
          <div className="menu-toggle" onClick={toggleNavbar}>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} />
          </div>
          <nav className={`nav-container ${isOpen ? 'open' : ''}`}>
            <div className='list-items'>
              <ul>
              <li className="nav-listitems"><a className="listitem-link" href="#landingpage"> Home</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#about"> About</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#project">Project</a></li>
                <li className="nav-listitems"><a className="listitem-link" href="#skill">skill</a></li>
                <li className="nav-listitems"><a className="listitem-link"href="#contact">Contact</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
