import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/navbar/logoEchangeo.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser } from "../../store/userReducer";
import LogIn from "../LogIn/Login";
import "./style.css";

/* import { getUser } from "../../fetch/fetchUser";
 */
function NavBar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };
  const [classLogin, setClassLogin] = useState("");
  const [classProfile, setClassProfile] = useState("");

  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [isHoveredProfile, setIsHoveredProfile] = useState();
  const [isPageGame, setIsPageGame] = useState(false);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const roleUser = useSelector((state) => state.user.user?.role?.name);

  const tokenLocal = localStorage.getItem("token");

  const profileClassOpen = "animate__animated animate__fadeInRight";
  const profileClassClose = "animate__animated animate__fadeOutLeft";
  const pathname = useLocation().pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Si on est dans la page du Jeu on empeche de changer le niveau.
    pathname === "/jeu" ? setIsPageGame(true) : setIsPageGame(false);
  }, [pathname]);

  /*  useEffect(() => {
    // Quand la valeur du token de redux change, on regarde si dans le local storage on a un token
    // et si c'est le cas, on recupere l'utilisateur et on le stock dans redux
    async function getUserData(id) {
      const user = await getUser(id);
      dispatch(setUser(user));
    }
    if (tokenLocal) {
      dispatch(setToken(tokenLocal));
      setClassLogin(loginClassClose);
      const userId = Number(localStorage.getItem("userId"));
      getUserData(userId);
    }
    // On declanche l'animation de l'icone profile pendant 6 seconds
    setIsHoveredProfile(true);
    setTimeout(() => {
      setIsHoveredProfile(false);
    }, 6000);
  }, [token]); */

  const handleMouseEnterProfile = () => {
    setIsHoveredProfile(true);
  };
  const handleMouseLeaveProfile = () => {
    setIsHoveredProfile(false);
  };

  function changePage(path) {
    // Si ProfileOptionContainer est ouvert, on le ferme
    if (profileClassOpen === classProfile) {
      setClassProfile(profileClassClose);
    }
    // Si pendant le jeu on veux changer de page on affiche un alert
    setIsLoginOpen(false);

    navigate(path, { replace: true });
  }

  function handleLoginOpen() {
    const loginContainerHtml = document.querySelector("#loginContainer");
    // On gére l'overture ou la fermeture du composant login
    if (!isLoginOpen) {
      //On set display block
      if (loginContainerHtml instanceof HTMLElement) {
        loginContainerHtml.style.display = "block";
      }
      setIsLoginOpen(true);
    }
    if (isLoginOpen === true) {
      setIsLoginOpen(false);
    } else {
      //On set display block
      if (loginContainerHtml instanceof HTMLElement) {
        loginContainerHtml.style.display = "block";
      }
      setIsLoginOpen(true);
    }

    // Si la NavBar est en version mobile on utilise displau block pour cacher le ProfileOptionContainer
    const navBarMobile = document.querySelector("nav");
    const btnNav = navBarMobile?.querySelector("button");
    if (!navBarMobile?.classList.contains("show")) {
      btnNav?.addEventListener("click", function () {
        if (loginContainerHtml instanceof HTMLElement) {
          loginContainerHtml.style.display = "none";
        }
      });
    }
  }

  // Si le composant LOGIN est affiché et on click dans la page (sauf sur la nav) le composant se ferme
  const root = document.querySelector("#root");

  const screen = root?.firstChild?.childNodes[1];

  screen?.addEventListener("click", function () {
    if (isLoginOpen === true) {
      setIsLoginOpen(false);
    }
  });
  
  const buttonMenuMobile = document.querySelector(".navbar-toggler");

  buttonMenuMobile?.addEventListener("click", function () {
    if (isLoginOpen === true) {
      setIsLoginOpen(false);
    }
  });
 

  // Si on click sur l'ecran sauf sur la nav, on fait disparaitre le ProfileOptionContainer
  screen?.addEventListener("click", function () {
    if (classProfile === profileClassOpen || classProfile === "") {
      //Si on est en taille mobile on fait rien
      if (window.screen.width > 991) {
        setClassProfile(profileClassClose);
      }
    }
  });
  function handleLogout() {
    const profileOptionHtml = document.querySelector(
      "#profile-container-option"
    );
    if (profileOptionHtml instanceof HTMLElement) {
      profileOptionHtml.style.display = "none";
    }
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(setToken(""));
    dispatch(setUser({}));
    setClassProfile(profileClassClose);

    // Redirection vers la page d'accueil
    navigate("/", { replace: true });
  }



  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container className="m-0">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo Echangeo"
            onClick={() => changePage("/")}
            className="brand-mobile"
          />
        </Navbar.Brand>
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
            <Navbar.Brand href="#home" className="brand-desktop">
              <img
                src={logo}
                alt="Logo Echangeo"
                onClick={() => changePage("/")}
              />
            </Navbar.Brand>
            <Link to="#" className="nav-item" onClick={closeMenu}>
              Je me propose !
            </Link>

            <ul className="navbar-nav d-flex align-items-center">
              {/* {(roleUser === "ADMIN" || roleUser === "SUPER_ADMIN") && (
                <NavItem
                  className="nav-item"
                  style={{ display: "flex", flexDirection: "column" }}
                  onClick={() => changePage("/admin/questions")}
                >
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  <div
                    className="nav-link active"
                    aria-current="page"
                    style={{ fontSize: "1rem" }}
                  >
                    ADMINISTRATION
                  </div>
                </NavItem>
              )}
 */}
              {!token ? (
                <li
                  className="nav-item"
                  onMouseEnter={handleMouseEnterProfile}
                  onMouseLeave={handleMouseLeaveProfile}
                  onClick={handleLoginOpen}
                >
                 Connexion / inscription
                </li>
              ) : (
                <li>
                  <p
                    style={{
                      width: "100%",
                      textAlign: "center",
                      marginBottom: 0,
                      textTransform: "uppercase",
                      color: "blue",
                      fontSize: "1.3rem",
                    }}
                  >
                    {user?.username}
                  </p>
                </li>
              )}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {isLoginOpen && (
        <LogIn setIsLoginOpen={setIsLoginOpen} isLoginOpen={isLoginOpen} />
      )}
    </Navbar>
  );
}

export default NavBar;
