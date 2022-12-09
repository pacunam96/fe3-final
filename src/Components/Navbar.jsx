import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import { Toolbar } from "@mui/material";
import Brightness6TwoToneIcon from '@mui/icons-material/Brightness6TwoTone';
import Brightness4TwoToneIcon from '@mui/icons-material/Brightness4TwoTone';

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme} = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };

  return (
    <Toolbar  className={`navbar navbar-expand-sm ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"}`}>
        <div className="container">
          <Link className={`navbar-brand`} to="/home"><h1>🦷DH Dentist</h1> </Link>         
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li><Link className="nav-link" to="/home" >Home</Link></li>
              <li><Link className="nav-link" to="/favs" >Favorites </Link></li>
              <li><Link className="nav-link" to="/contact" >Contact Us</Link></li>              
              <li>
                <button  style={{size : 25, padding: 13}} className={`btn btn-${isDarkMode ? "light" : "dark"}`}onClick={changeTheme}>
                  {isDarkMode ? <Brightness6TwoToneIcon sx={{ color: "#fbcc57" }} /> : <Brightness4TwoToneIcon sx={{ color: "#2979ff" }}/>}{" "}
                </button>
              </li>
            </ul>

        </div>
    </Toolbar>
  );
};

export default Navbar;