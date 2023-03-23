import { useSelector } from "react-redux";
import "./Footer.css";
const Footer = () => {
  const darkTheme = useSelector(function(state){return state.darkTheme})

  return (
    <div
      className="footer-container"
      style={{ borderColor: darkTheme ? "white" : "rgb(36,36,36)" ,
      backgroundColor:darkTheme ?  "rgb(13,13,13)":"white" 
    }}>
        <span style={{color: darkTheme ? "white" : "rgb(36,36,36)",fontWeight:300}} className="creator">created by <b style={{color: darkTheme ? "white" : "rgb(36,36,36)"}}>qochinyan</b></span>

    </div>
  );
};
export default Footer;
