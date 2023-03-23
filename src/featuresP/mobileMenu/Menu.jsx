import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
const Menu = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menuIsOpen);
  const darkTheme = useSelector((state) => state.darkTheme);
  console.log(menuOpen);
  const handleMenuOpen = () => {
    dispatch({
      type: "SET_MENU_OPEN",
    });
  };
  return (
    <div
      className={menuOpen ? "menu-mobile open-menu" : "menu-mobile"}
      onClick={() => {
        handleMenuOpen();
      }}>
      <div
        className="menu-block"
        onClick={(e) => {
          e.stopPropagation();
        }}>
        <ul>
          <li>
            <a
              href="#cont"
              onClick={handleMenuOpen}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleMenuOpen}>
              Skills
            </a>
          </li>
          <li>
            <a
            href="#contacts"
              onClick={handleMenuOpen}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
