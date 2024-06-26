import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';


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
            {/* <img src={''} alt="KHIAOTIC" /> */}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('about')}>About</Nav.Link>    
            
            <NavDropdown id="nav-dropdown" title="Skills">
            {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('skills')}>Dev  Skills</Nav.Link>     */}
            <NavDropdown.Item href="#skills" className={activeLink === 'skills' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('skills')}>Developer Skills</NavDropdown.Item>    
            <NavDropdown.Item href="#skillsAnimate" className={activeLink === 'skillsAnimate' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('skillsAnimate')}>Animator Skills</NavDropdown.Item>    
            </NavDropdown>
            <NavDropdown id="nav-dropdown" title="Portfolio(s)">
            {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('skills')}>Dev  Skills</Nav.Link>     */}
            <NavDropdown.Item href="#projects" className={activeLink === 'portfolio' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('portfolio')}>Developer</NavDropdown.Item>    
            <NavDropdown.Item href="#projectsAnimate" className={activeLink === 'portfolioAnimate' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('portfolioAnimate')}>Animator</NavDropdown.Item>    
            </NavDropdown>

            {/* <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('portfolio')}>Portfolio(s)</Nav.Link>     */}
            <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('connect')}>Contact</Nav.Link>    
            <Nav.Link href="#résumé" className={activeLink === 'résumé' ? 'active-Link' : 'navbar-link'} onClick={() =>onUpdateActionLink('résumé')}>Résumé</Nav.Link>    
          </Nav>
          <span className="navbar-text">
            <div className="social-media-icons">
                <a href="www.linkedin.com/in/khi-warner-846170107"><img src={require('../images/navbar/LI-In-Bug.png')} alt="LinkedIn"  /></a>
                <a href="https://github.com/Khiaotic"><img src={require('../images/navbar/github-mark.png')} alt="Github"  /></a>
                {/* <a href="https://www.upwork.com/freelancers/~010b64163aca593c70"><img src={require('../images/upwor_logo.png')} alt="UpWork"  /></a> */}
                <a href="https://www.instagram.com/khiaotic"><img src={require('../images/navbar/insta_3.png')} alt="Instagram"  /></a>
                {/* <a href="#"><img src={require('../images/navbar/insta_3.png')} alt="Instagram"  /></a> */}
                <a href="https://www.youtube.com/@khiaotic1657"><img src={require('../images/navbar/yt.png')} alt="Youtube"  /></a>
            </div>
            <button className="" onClick={() => console.log('connected link')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

