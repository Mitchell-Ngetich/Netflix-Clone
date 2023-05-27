import React, {useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src="https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png" alt="netflix logo" />
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix logo" className="nav__avatar" />

    </div>
  )
}

export default Navbar