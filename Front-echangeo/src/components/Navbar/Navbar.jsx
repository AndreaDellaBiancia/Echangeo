import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/navbar/logoEchangeo.png";
function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container className="m-0">
       
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-item" onClick={closeMenu}>
              Accueil
            </Link>
            <Link to="#" className="nav-item" onClick={closeMenu}>
              Je demande un service
            </Link>
            <Navbar.Brand href="#home"><img src={logo} alt="Logo Echangeo" /></Navbar.Brand>
            <Link to="#" className="nav-item" onClick={closeMenu}>
              Je me propose !
            </Link>
            <Link to="#" className="nav-item"  >Inscription/connexion</Link>
          </Nav>
        </Navbar.Collapse>
     
      </Container>
    </Navbar>
  );
}

export default NavBar;