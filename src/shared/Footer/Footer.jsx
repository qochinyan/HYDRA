import "./Footer.scss";
import logo from "../../media/icons/logoimg.png";
import facebook from "../../media/icons/facebook.png";
import twitter from "../../media/icons/twitter.png";
import linkedin from "../../media/icons/linkedin.png";
import youtube from "../../media/icons/youtube.png";
import instagram from "../../media/icons/instagram.png";
import pinterest from "../../media/icons/pinterest.png";

import vectorfooter from "../../media/bg/footer-vector.png";
import vectorfooter2 from "../../media/bg/footer-vector2.png";
const Footer = () => {
  const hrefs = [
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "TECHNOLOGIES" },
    { name: "HOW TO" },
    { name: "JOIN HYDRA" },
  ];
  const infos = [
    { name: "F.A.Q" },
    { name: "SITEMAP" },
    { name: "CONDITIONS" },
    { name: "LICENSES" },
  ];
  const links = [facebook, twitter, linkedin, youtube, instagram, pinterest];
  return (
    <footer className="footer-container">
      <img className="bg-vector-7" src={vectorfooter} alt="" />
      <img className="bg-vector-8 bg-vector" src={vectorfooter2} alt="" />
      <div className="footer-top">
        <img src={logo} alt="" className="logo" />
        <div src="" alt="" className="footer-border" />
        <div className="footer-hrefs">
          {hrefs.map((e) => (
            <a href={e.href}>{e.name}</a>
          ))}
        </div>{" "}
        <div src="" alt="" className="footer-border" />
        <div className="footer-hrefs">
          {infos.map((e) => (
            <a href={e.href}>{e.name}</a>
          ))}
        </div>
        <div src="" alt="" className="footer-border" />
        <div className="footer-links">
          <h3>SOCIALIZE WITH HYDRA</h3>
          <div className="footer-links-social">
            {links.map((e) => (
              <img src={e} />
            ))}
          </div>
          <button>BUILD YOUR WORLD</button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-devider" />
        <div className="footer-bottom-text">
          <span> 2023 © HYDRA LANDING PAGE </span>{" "}
          <span className="dash"> - </span>
          <span> BY ZINE. E. FALOUTI </span> <span className="dash"> - </span>
          <span> ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
