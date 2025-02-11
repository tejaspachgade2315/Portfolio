import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Skill = () => {
  return (
    <div>
      <h1 className="name-css text-4xl font-bold text-center text-[#001b5e] bg-white">
        <span className="surname headings" id="skills">
          Skills
        </span>
      </h1>
      <div className="w-full bg-clr/90">
        <div
          className="skill_row mt-2 max-w-[1040px] m-auto md:pl-4 py-6"
          id="skills"
        >
          <div className="wrapper_skill">
            <p>Java Core</p>
            <div className="container">
              <div
                className="skills Java"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                80%
              </div>
            </div>
            <p>Html</p>
            <div className="container">
              <div
                className="skills html"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                90%
              </div>
            </div>
            <p>Css</p>
            <div className="container">
              <div
                className="skills css"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                80%
              </div>
            </div>
            <p>JavaScript</p>
            <div className="container">
              <div
                className="skills js"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                85%
              </div>
            </div>
            <p>ReactJS</p>
            <div className="container">
              <div
                className="skills react"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                75%
              </div>
            </div>
            <p>NodeJS</p>
            <div className="container">
              <div
                className="skills node"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                70%
              </div>
            </div>
            <p>MongoDB</p>
            <div className="container">
              <div
                className="skills db"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                65%
              </div>
            </div>
            <p>Python</p>
            <div className="container">
              <div
                className="skills python"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                50%
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
