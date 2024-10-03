import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'; // Import Link from react-scroll
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from '../assets/img/mylogo.png';

const NavBar = () => {
  const [activeLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} className='nav-logo' style={{ height: "2rem", width: "auto" }} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: "#fff" }} className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'}>Home</Nav.Link>
            <Nav.Link href="#skills" style={{ color: "#fff", margin: "6.5px 0 0 0" }} className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'}>Skills</Nav.Link>
            <Nav.Link href="#projects" style={{ color: "#fff", padding: "0", margin: "6.5px 0 0 0" }} className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/shubham-mergu" target="_blank" rel="noopener noreferrer" className='me-3'><img src={navIcon1} alt="" /></a>
              <a href="https://www.github.com/Shubbu-07" target="_blank" rel="noopener noreferrer" className='me-3'><img src={navIcon2} alt="" /></a>
              <a href="https://shubham-mergu-07.hashnode.dev/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <Link to="connect" smooth={true} duration={500}>  {/* Smooth scroll to Contact section */}
              <button className='vvd'><span>Let's Connect</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
