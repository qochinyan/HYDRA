import { NavLink } from "react-router-dom";
import logo from "../../media/icons/logoimg.png";
import logotxt from "../../media/icons/logotxt.png";
import burger from "../../media/icons/mobileburger.png"
// import { startLoading } from "../../Redux/features/settings/settingsSlice";
// import { useAppDispatch } from "../../Redux/hooks";
import "./Header.scss";
const Header = () => {
  // const dispatch = useAppDispatch()

  return (
    <header className="header-container global-container">
      <div className="logo">
        <NavLink
          to="/home"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img className="logo-img" src={logo} alt="" />
          <img className="logo-txt" src={logotxt} alt="" />
        </NavLink>
      </div>
      <nav className="header-navigation">
        <NavLink className="header-link" to="/home">
          ABOUT
        </NavLink>
        <NavLink className="header-link" to="/news">
          SERVICES
        </NavLink>
        <NavLink className="header-link" to="/converter">
          TECHNOLOGIES
        </NavLink>{" "}
        <NavLink className="header-link" to="/converter">
          HOW TO
        </NavLink>
      </nav>
      <div className="header-buttons">
        <NavLink  to="/">
          <button className="btn-contactus">CONTACT US</button>
        </NavLink>
        <NavLink to="/">
          <button className="btn-joinhydra">JOIN HYDRA</button>
        </NavLink>
      </div>
      <img className="header-burger" src={burger} alt="" />
    </header>
  );
};

export default Header;
