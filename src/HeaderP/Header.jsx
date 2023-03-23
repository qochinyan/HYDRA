import "./Header.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const darkTheme = useSelector(function (state) {
    return state.darkTheme;
  });
  const dispatch = useDispatch();
  const menuOpen = useSelector(function (state) {
    return state.menuIsOpen;
  });
  const handleCheck = () => {
    dispatch({ type: "SET_THEME" });
  };
  return (
    <div className={darkTheme ? "headerBox" : "headerBox light"}>
      <div className="innerHeader">
        <label className="themeChanger">
          <input onClick={handleCheck} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div
          onClick={() => {
            dispatch({ type: "SET_MENU_OPEN" });
          }}
          className={darkTheme ? "burger" : "light burger"}>
          <input checked={menuOpen} type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="list">
          <ul>
            <li>
              <a
                href="#cont"
                style={{
                  textDecoration: "none",
                  borderColor: darkTheme ? "white" : "black",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                style={{
                  textDecoration: "none",
                  borderColor: darkTheme ? "white" : "black",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                }}>
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                style={{
                  textDecoration: "none",
                  borderColor: darkTheme ? "white" : "black",
                  color: darkTheme ? "white" : "rgb(36,36,36)",
                }}>
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
