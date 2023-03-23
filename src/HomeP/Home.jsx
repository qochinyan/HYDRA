import { useSelector } from "react-redux";

import insta from "../../images/insta.png";
import face from "../../images/face.png";
import github from "../../images/github.png";
import In from "../../images/in.png";

import CV from "../../Files/CV-Aren-Qochinyan.pdf"
import styles from "./Home.module.scss";
const Home = () => {
  const darkTheme = useSelector(function (state) {
    return state.darkTheme;
  });

  return (
    <div
      id="cont"
      className={darkTheme ? styles.cont : `${styles.cont} ${styles.light}`}>
      <div className={styles.ovals}>
        <div
          className={
            darkTheme ? styles.oval1 : `${styles.oval1} ${styles.bgBlack}`
          }></div>
        <div
          className={
            darkTheme ? styles.oval2 : `${styles.oval2} ${styles.bgBlack}`
          }></div>
        <div
          className={
            darkTheme ? styles.oval3 : `${styles.oval3} ${styles.bgBlack}`
          }></div>
      </div>
      <div className={styles.firstContent}>
        <div className={styles.firstContentLeft}>
          <span
            className={
              darkTheme ? styles.hi : `${styles.hi} ${styles.colBlack}`
            }>
            Hi !
          </span>{" "}
          <br />
          <span
            className={
              darkTheme
                ? styles.headNext
                : `${styles.headNext} ${styles.colBlack}`
            }>
            <b style={{ fontSize: "50px" }}>I</b>'m Aren
          </span>
          <br />
          <a href={CV} download>
            <button className={styles.cvBut}
              style={{
                background: darkTheme ? "white" : "rgb(36,36,36)",
                color: darkTheme ? "rgb(36,36,36)" : "white",
              }}>
              Download CV
            </button>
          </a>
        </div>
        <div className={styles.firstContentRight}>
          <img
            style={{ borderRadius: darkTheme ? "20px 20px 0 0" : null }}
            className={styles.avatar}
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/98381915/original/88c2f61d8b8c88d91030e19d12ca832c72b1b99d/design-minimalist-flat-line-vector-avatar-of-you.jpg"
            alt=""
          />
        </div>
      </div>
      <div id="skills" className={`${styles.webContainer} ${styles.skills}`}>
        <h1
          className={
            darkTheme
              ? `${styles.skillsHead}`
              : `${styles.skillsHead} ${styles.colBlack}`
          }>
          Skills
        </h1>
        <div className={styles.Skillscontent}>
          <div
            className={`${styles.col} ${styles.topSkill}`}
            style={{ borderColor: darkTheme ? "white" : "rgb(36, 36, 36)" }}>
            <ul className={styles.skill}>
              <li>
                <span className={`${styles.expand} ${styles.html5}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>HTML</em>
              </li>
              <li>
                <span className={`${styles.expand} ${styles.css3}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>CSS</em>
              </li>
              <li>
                <span className={`${styles.expand} ${styles.figma}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>Figma</em>
              </li>
              <li>
                <span className={`${styles.expand} ${styles.js}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>
                  JavaScript
                </em>
              </li>
              <li>
                <span className={`${styles.expand} ${styles.react}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>React</em>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <ul className={styles.skill}>
              <li>
                <span
                  className={`${styles.expand} ${styles.git} ${styles.rightSkill}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>
                  Git / GitHub
                </em>
              </li>
              <li>
                <span
                  className={`${styles.expand} ${styles.ts} ${styles.rightSkill}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>
                  TypeScript
                </em>
              </li>
              <li>
                <span
                  className={`${styles.expand} ${styles.redux} ${styles.rightSkill}`}></span>
                <em className={!darkTheme ? styles.colBlack : null}>Redux</em>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="contacts"
        className={`${styles.webContainer} ${styles.contacts}`}>
        <h1
          className={
            darkTheme
              ? `${styles.skillsHead}`
              : `${styles.skillsHead} ${styles.colBlack}`
          }>
          Contacts
        </h1>
        <div className={styles.contactsCont}>
          <a target="_blank" href="https://www.instagram.com/qochinyan.707/">
            <img src={insta} alt="" />
          </a>
          <a target="_blank" href="https://www.facebook.com/qochh/">
            <img src={face} alt="" />
          </a>
          <a target="_blank" href="https://www.github.com/qochinyan">
            <img src={github} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aren-qochinyan-45b93924b/">
            <img src={In} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
