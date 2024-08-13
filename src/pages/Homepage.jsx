import React from "react";
import "../styles/stylehome.css";
import Header from "../components/Layouts/Header";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="mainbg">
        <Header />
        <div className="diplflx">
          <div className="bgcolr bgclr2">
            <img
              className="bee"
              src={require("../pages/image/OBJECTS.png")}
              alt="logo"
            />
            <div className="clr">Beetle</div>
          </div>

          <div className="bgcolr bgclr2">
            <img
              className="bee1"
              src={require("../pages/image/Section1.png")}
              alt="logo"
            />
            <div className="clr ant">Ant</div>
          </div>

          <div className="bgcolr bgclr2">
            <img
              className="bee2"
              src={require("../pages/image/Group.png")}
              alt="logo"
            />
            <div className="clr">Wasp</div>
          </div>
        </div>

        <div className="beemain">
          <img
            className="beemn"
            src={require("../pages/image/Groupmain.png")}
            alt="logo"
          />
        </div>

        <div className="alomain">
          <img
            className="ALo"
            src={require("../pages/image/Groupalo.png")}
            alt="logo"
          />
          <div className="eyestop">
            <img
              className="ALo01"
              src={require("../pages/image/eyes.png")}
              alt="logo"
            />
          </div>
          <div className="eyestop2">
            <img
              className="ALo02"
              src={require("../pages/image/eyes.png")}
              alt="logo"
            />
          </div>
        </div>

        <div className="backnext linkstyl">
          <Link to="/pervious" className="bgcolr">
            <img
              className="back"
              src={require("../pages/image/Vectorback.png")}
              alt="logo"
            />
            <div className="backtext ">Back</div>
          </Link>

          <Link to="/next" className="bgcolr ">
            <img
              className="next"
              src={require("../pages/image/Vectornext.png")}
              alt="logo"
            />
            <div className="backtext linkstyl">Next</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Homepage;
