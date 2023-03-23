import { useReducer } from "react";

import "./Home.scss";
import Card from "../../shared/Card/Card";
import ArrowSection from "../../shared/ArrowSection/ArrowSection";
import ProcessItem from "../../shared/processItem/ProcessItem";
import VisitItem from "../../shared/VisitItem/VisitItem.jsx";

import firstimg from "../../media/img/frstimg.png";

import arrow from "../../media/icons/arrow.png";
import mobileVisitArrow from "../../media/icons/mobilevisitarrow.png";
import mobileArrow from "../../media/icons/mobilearrow.png";
import location from "../../media/icons/location.png";
import phone from "../../media/icons/phone.png";
import mail from "../../media/icons/mail.png";
import vector1 from "../../media/bg/Vector4.png";
import vector4 from "../../media/bg/Vector3.png";
import vector3 from "../../media/bg/Vector1.png";
import vector2 from "../../media/bg/Vector2.png";

import aboutimg from "../../media/img/aboutimg.png";
import aboutbg1 from "../../media/bg/aboutbg1.png";
import aboutbg2 from "../../media/bg/aboutbg2.png";
import processbg from "../../media/bg/processbg.png";

import simulation from "../../media/img/simulation.png";
import education from "../../media/img/education.png";
import selfcare from "../../media/img/selfcare.png";
import outdoor from "../../media/img/outdoor.png";
import cardsbg from "../../media/bg/cards-bg.png";
//tech btn
import darkElipse from "../../media/bg/darkElipse.png";
import gradElipse from "../../media/bg/gradElipse.png";
import miniarrow from "../../media/icons/miniarrow.png";
// techIcons
import unity from "../../media/icons/unity.png";
import vive from "../../media/icons/vive.png";
import unreal from "../../media/icons/unreal.png";
import oculus from "../../media/icons/oculus.png";

const Home = () => {
  // vivst slide
  const VisitMobileArrow = ({ to }) => {
    return (
      <img
        src={mobileVisitArrow}
        alt=""
        onClick={() => {
          handleChangeIndex("SET_VISIT", "visit", "forward");
        }}
        style={{ transform: to === "next" && "rotate(180deg)", width: "60px" }}
        className="visit-mobile-icon"
      />
    );
  };

  const initialState = { visit: 0, cards: 0, techs: 0, process: 0 };
  const indexesReducer = (state, action) => {
    switch (action.type) {
      case "SET_VISIT":
        return {
          ...state,
          visit: action.payload,
        };
      case "SET_CARDS":
        return {
          ...state,
          cards: action.payload,
        };
      case "SET_TECHS":
        return {
          ...state,
          techs: action.payload,
        };
      case "SET_PROCESS":
        return {
          ...state,
          process: action.payload,
        };
    }
  };
  const [indexes, dispatch] = useReducer(indexesReducer, initialState);
  const visits = [
    {
      sizes: {
        icon: "40.83px",
        height: "61.25px",
      },
      icon: location,
      head1: "Pay Us a Visit",
      head2: "Union St, Seattle, WA 98101, United States",
    },
    {
      sizes: {
        icon: "44.25px",
        height: "44.25px",
      },
      icon: phone,
      head1: "Give Us a Call",
      head2: "(110) 1111-1010",
    },
    {
      sizes: {
        icon: "48.75px",
        height: "37.92px",
      },
      icon: mail,
      head1: "Send Us a Message",
      head2: "Contact@HydraVTech.com",
    },
  ];
  const cards = [
    { name: "SIMULATION", img: simulation },
    { name: "EDUCATION", img: education },
    { name: "SELF-CARE", img: selfcare },
    { name: "OUTDOOR", img: outdoor },
  ];
  const techIcons = [
    { image: unreal, width: "174px" },
    { image: unity, width: "252px" },
    { image: oculus, width: "263px" },
    { image: vive, width: "282px" },
  ];
  const processes = [
    {
      text: "3D Conception & Design",
      No: "01",
      widths: {
        block: "207px",
        text: "187px",
      },
    },
    {
      text: "Interaction Design",
      No: "02",
      widths: {
        block: "170px",
        text: "140px",
      },
    },
    {
      text: "VR World User Testing",
      No: "03",
      widths: {
        block: "167px",
        text: "137px",
      },
    },
    {
      text: "Hydra VR Deploy",
      No: "04",
      widths: {
        block: "147px",
        text: "117px",
      },
    },
  ];
  const handleChangeIndex = (actionType, indexName, direction) => {
    let newIndex;
    if (direction === "forward") {
      switch (indexName) {
        case "visit":
          newIndex = indexes.visit >= visits.length - 1 ? 0 : indexes.visit + 1;
          break;
        case "cards":
          newIndex = indexes.cards >= cards.length - 1 ? 0 : indexes.cards + 1;
          break;
        case "techs":
          newIndex =
            indexes.techs >= techIcons.length - 1 ? 0 : indexes.techs + 1;
          break;
        case "process":
          newIndex =
            indexes.process >= processes.length - 1 ? 0 : indexes.process + 1;
      }
    } else if (direction === "back") {
      switch (indexName) {
        case "visit":
          newIndex = indexes.visit <= 0 ? visits.length - 1 : indexes.visit - 1;
          break;
        case "cards":
          newIndex = indexes.cards <= 0 ? cards.length - 1 : indexes.cards - 1;
          break;
        case "techs":
          newIndex =
            indexes.techs <= 0 ? techIcons.length - 1 : indexes.techs - 1;
          break;
        case "process":
          newIndex =
            indexes.process <= 0 ? processes.length - 1 : indexes.process - 1;
      }
    }
    dispatch({ type: actionType, payload: newIndex });
  };
  return (
    <div className="home-container">
      <>
        {" "}
        <img className="bg-vector-1 bg-vector" src={vector1} alt="" />
        <img
          className="bg-vector-2 bg-vector frst-vectors"
          src={vector2}
          alt=""
        />
        <img
          className="bg-vector-3 bg-vector frst-vectors"
          src={vector3}
          alt=""
        />
        <img
          className="bg-vector-4 bg-vector frst-vectors"
          src={vector4}
          alt=""
        />
        <img className="bg-vector-5 bg-vector" src={aboutbg1} alt="" />
        <img className="bg-vector-6 bg-vector" src={aboutbg2} alt="" />
      </>
      <section className="home-first">
        <div className="first-left">
          <h2 className="home-header">
            <span>
              {" "}
              <span className="linear-frst">Dive </span>
              Into The Depths
              <br />
            </span>
            <span>
              {" "}
              Of <span className="linear-sec">Virtual Reality</span>
            </span>
          </h2>
          <p className="first-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            atque quod recusandae aperiam earum cupiditate voluptas totam
            perspiciatis facilis esse ipsam ullam laborum pariatur, quam
            accusantium
          </p>
          <div
            className="first-left-link"
            style={{ marginTop: "65px", display: "flex", alignItems: "center" }}
          >
            <button className="btn-byw">BUILD YOUR WORLD</button>
            <img
              className="arrow"
              src={arrow}
              style={{ cursor: "pointer" }}
              alt=""
            />
          </div>
        </div>
        <div className="first-right">
          <img src={firstimg} alt="" />
        </div>
        <div className="mobile-first-heading">
          <h2 className="home-header">
            <span>
              {" "}
              <span className="linear-frst">Dive </span>
              Into The Depths
            </span>
            <span>
              {" "}
              Of <span className="linear-sec">Virtual Reality</span>
            </span>
          </h2>{" "}
        </div>{" "}
        <button className="btn-byw w1080">BUILD YOUR WORLD</button>
        <div className="visit-mobile mobile">
          <VisitMobileArrow to="prev" />
          <VisitItem
            sizes={visits[indexes.visit].sizes}
            head1={visits[indexes.visit].head1}
            head2={visits[indexes.visit].head2}
            icon={visits[indexes.visit].icon}
          />
          <VisitMobileArrow to="next" />
        </div>
      </section>
      <div className="visit-mobile mobile tablet">
        <VisitMobileArrow to="prev" />
        <VisitItem
          sizes={visits[indexes.visit].sizes}
          head1={visits[indexes.visit].head1}
          head2={visits[indexes.visit].head2}
          icon={visits[indexes.visit].icon}
        />
        <VisitMobileArrow to="next" />
      </div>
      <div className="visit desktop">
        {visits.map((data, i) => (
          <>
            {" "}
            <VisitItem
              key={i}
              sizes={data.sizes}
              head1={data.head1}
              head2={data.head2}
              icon={data.icon}
            />
            {i < visits.length - 1 && <div className="visit-border"></div>}
          </>
        ))}
      </div>
      <ArrowSection
        classname="introduction"
        id="about"
        head1="INTRODUCTION"
        head2="TO HYDRA VR"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className="about">
        <div className="about-left">
          <img src={aboutimg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-head">
            <h3>ABOUT</h3>
            <h3>TO HYDRA VR</h3>
          </div>
          <p className="about-desc">
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>
          <button>LET’S GET IN TOUCH</button>
        </div>
      </div>
      <ArrowSection
        classname="why-build"
        id=""
        head1="WHY BUILD"
        head2="WITH HYDRA?"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus
          et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
          amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
          aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in.
          Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div id="services" className="cards">
        <img className="bg-vector-7 bg-vector" src={cardsbg} alt="" />

        {cards.map((e, i) => {
          return <Card data={e} />;
        })}
      </div>
      <div className="cards-mobile mobile">
        <img
          className="mobile-arrow left"
          src={mobileArrow}
          alt=""
          onClick={() => {
            handleChangeIndex("SET_CARDS", "cards", "back");
          }}
        />
        <Card data={cards[indexes.cards]} />
        <img
          src={mobileArrow}
          className="mobile-arrow right"
          alt=""
          onClick={() => {
            handleChangeIndex("SET_CARDS", "cards", "forward");
          }}
        />
      </div>
      <div className="technologies">
        <div className="tech-headings">
          <h3 className="tech-heading">TECHNOLOGIES & HARDWARE</h3>
          <h3 className="tech-heading thin">USED BY HYDRA VR.</h3>
        </div>
        <a href="#process" className="tech-but">
          <img src={darkElipse} alt="" className="tech-but-black" />
          <img src={gradElipse} alt="" className="tech-but-gradient" />
          <img src={miniarrow} alt="" className="tech-but-arrow" />
        </a>
      </div>
      <div className="technologies-mobile">
        <h3 className="tech-heading">TECHNOLOGIES & HARDWARE</h3>
        <h3 className="tech-heading thin">USED BY HYDRA VR.</h3>
      </div>
      <div id="process" className="tech-icons desktop">
        {techIcons.map((e) => {
          return <img style={{ width: e.width }} src={e.image} alt="" />;
        })}
      </div>
      <div
        id="process"
        className="tech-icons-mobile mobile"
        style={{ height: "300px" }}
      >
        <img
          className="mobile-arrow left"
          src={mobileArrow}
          alt=""
          onClick={() => {
            handleChangeIndex("SET_TECHS", "techs", "back");
          }}
        />
        <img
          style={{ width: techIcons[indexes.techs].width }}
          src={techIcons[indexes.techs].image}
          alt=""
        />
        <img
          src={mobileArrow}
          className="mobile-arrow right"
          alt=""
          onClick={() => {
            handleChangeIndex("SET_TECHS", "techs", "forward");
          }}
        />
      </div>
      <ArrowSection
        classname="how-we-build"
        id=""
        head1="HOW WE BUILD"
        head2="WITH HYDRA VR?"
        description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
      nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
      quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
      lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <div className="process desktop">
        {processes.map((e) => {
          return <ProcessItem mode="desktop" item={e} />;
        })}
        <img className="bg-vector-8 bg-vector" src={processbg} alt="" />
      </div>
      <div className="process-mobile mobile">
        <img
          className="mobile-arrow left"
          src={mobileArrow}
          alt=""
          onClick={() => {
            handleChangeIndex("SET_PROCESS", "process", "back");
          }}
        />
        <ProcessItem mode="mobile" item={processes[indexes.process]} />{" "}
        <img
          src={mobileArrow}
          className="mobile-arrow right"
          alt=""
          onClick={() => {
            handleChangeIndex("SET_PROCESS", "process", "forward");
          }}
        />{" "}
      </div>
      <div className="form">
        <div className="form-top">
          <h3 className="fit">JOIN HYDRA</h3>
          <div className="border"></div>
          <h3 className="thin">Let’s Build Your VR Experience</h3>
        </div>
        <form action="">
          <div className="form-block">
            <input placeholder="First Name" className="input" type="text" />
            <input placeholder="Last Name" className="input" type="text" />
            <input placeholder="Email" className="input" type="text" />
            <input placeholder="Phone Number" className="input" type="text" />
            <input placeholder="Subject" className="input tall" type="text" />
            <textarea
              placeholder="Tell Us Something..."
              className="tall"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </div>
          <input type="submit" value="SEND TO HYDRA" />
        </form>
      </div>{" "}
    </div>
  );
};

export default Home;
