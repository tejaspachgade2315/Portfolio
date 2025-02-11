import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import CyberpunkText from "./CyberpunkText";
import Education from "./Education";
import Skill from "./Skill";
import Coding from "./Coding";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import Sidenav from "./Sidenav";
import Interactive from "./Interactive";
import CarouselComponent from "./CarouselComponent";
import Glimpses from "./Glimpses";
import Walking from "./Walking";
import GenAI from "./GenAI";

const Main = () => {
  const [theme, setTheme] = useState("dark-theme");
  const [mode_name, setModeName] = useState("Light Mode");

  function changingModeName() {
    if (mode_name == "Dark Mode") {
      setModeName("Light Mode");
    }
    if (mode_name == "Light Mode") {
      setModeName("Dark Mode");
    }
  }

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[1]"
        src="/bg-tejas_optimized_1000.jpg"
        alt="Tejas Pachgade"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-[#001b5e] mainclass">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-center items-start ml-4">
          {/* <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Tejas
          </h1> */}
          <div className="sm:text-5xl text-4xl bg-[#007bff]">
            <CyberpunkText text={"Hi, I'm Tejas."} />
          </div>
          <h2 className="flex sm:text-3xl font-bold text:2xl pt-1 mt-2 bg-[#007bff]">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Self Taught Programmer",
                2000,
                "Engineer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-1 max-w-[200px] w-full bg-[#007bff] mt-5 rounded-lg px-2">
            <a href="https://twitter.com/tejaspachgade_" target="_blank">
              <FaTwitter
                className="btns1 cursor-pointer hover:scale-125 ease-in duration-200"
                size={30}
              />
            </a>
            <a href="https://github.com/tejaspachgade2315" target="_blank">
              <AiOutlineGithub
                className="btns1 cursor-pointer hover:scale-125 ease-in duration-200"
                size={30}
              />
            </a>
            <a href="https://www.instagram.com/tejaspachgade_/" target="_blank">
              <FaInstagram
                className="btns1 cursor-pointer hover:scale-125 ease-in duration-200"
                size={30}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/tejaspachgade/"
              target="_blank"
            >
              <FaLinkedinIn
                className="btns1 cursor-pointer hover:scale-125 ease-in duration-200"
                size={30}
              />
            </a>
          </div>
          <br></br>

          <a
            href="#"
            className="btn hover:scale-100 relative rounded px-5 py-2.5 my-[-10px] overflow-hidden group bg-[#007bff] hover:bg-gradient-to-r hover:from-green-500 font-bold hover:to-green-400 text-black  hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 hidden md:block"
            onClick={() => toggleTheme()}
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative" onClick={changingModeName}>
              {mode_name}
            </span>
          </a>
        </div>
      </div>
      <Education />
      <div className="bg_color">
        <Skill />
      </div>
      <Coding />
      <Projects />
      <Walking />
      <Interactive />
      <Glimpses />
      <CarouselComponent />
      <Contact />
      <GenAI/>
      <Footer />
      <Sidenav />
    </div>
  );
};

export default Main; 
