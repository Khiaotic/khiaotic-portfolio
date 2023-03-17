import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
       const onScroll  = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
       }
       window.addEventListener("scroll", onScroll);

       return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActionLink = (value) => {
        setActiveLink(value); 
    }
  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled":  ""}  >
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="KHIAOTIC" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('about')}>About</Nav.Link>    
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('skills')}>Skills</Nav.Link>    
            <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('portfolio')}>Portfolio(s)</Nav.Link>    
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('contact')}>Contact</Nav.Link>    
            <Nav.Link href="#résumé" className={activeLink === 'résumé' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('résumé')}>Résumé</Nav.Link>    
          </Nav>
          <span className="navbar-text">
            <div className="social-media-icons">
                <a href="#"><img src={''} alt="LinkedIn"  /></a>
                <a href="#"><img src={''} alt="Github"  /></a>
                <a href="#"><img src={''} alt="Instagram"  /></a>
                <a href="#"><img src={''} alt="Youtube"  /></a>
            </div>
            <button className="" onClick={() => console.log('connected link')}><span>Establish A Connection</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

