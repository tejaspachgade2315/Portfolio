import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsMoonFill, BsPerson, BsSun } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { IoSchoolOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

const Sidenav = () => {
  const [isClicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const [theme, setTheme] = useState("dark-theme");
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
    themeHandler();
  };

  const themeHandler = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div>
      <AiOutlineMenu
        style={{ color: "green", fontSize: "50px" }}
        onClick={handleNav}
        className="absolute top-4 right-4 md:hidden hidden cursor-pointer z-99"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white opacity-90 flex flex-col justify-center items-center text-black z-50">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#education"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          {/* <a
            href="/blog"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Blogs</span>
          </a> */}
          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GiSkills size={20} />
            <span className="pl-4">Skills</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contacts</span>
          </a>
        </div>
      ) : null}

      <div className="md:block hidden fixed top-[10%] z-10">
        <div className="flex flex-col">
          <a className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            {isClicked ? (
              <a>
                <BsMoonFill
                  size={20}
                  className="icon"
                  onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {hovered && <span className="tooltip">Light Mode</span>}
              </a>
            ) : (
              <a>
                <BsSun
                  size={20}
                  className="icon"
                  onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {hovered && <span className="tooltip">Dark Mode</span>}
              </a>
            )}
          </a>

          <a
            href="#main"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip">Home</span>}
          </a>

          <a
            href="#education"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoSchoolOutline
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip">Education</span>}
          </a>

          <a
            href="#skills"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GiSkills
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip ">Skills</span>}
          </a>

          <a
            href="#projects"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip">Projects</span>}
          </a>

          {/* <a
            href="/blog"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip">Blogs</span>}
          </a> */}

          <a
            href="#contact"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip ">Contact Me</span>}
          </a>
        </div>
      </div>
      <div className="md:hidden block fixed top-[2%] z-10">
        <div className="flex flex-row w-screen items-center justify-around">
          {/* <a className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-0 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            {isClicked ? (
              <a>
                <BsMoonFill
                  size={20}
                  className="icon"
                  onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {hovered && <span className="tooltip2">Light Mode</span>}
              </a>
            ) : (
              <a>
                <BsSun
                  size={20}
                  className="icon"
                  onClick={handleClick}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                {hovered && <span className="tooltip2">Dark Mode</span>}
              </a>
            )}
          </a> */}

          <a
            href="#main"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Home</span>}
          </a>

          <a
            href="#education"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoSchoolOutline
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Education</span>}
          </a>

          <a
            href="#skills"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GiSkills
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Skills</span>}
          </a>

          <a
            href="#projects"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineProject
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Projects</span>}
          </a>

          {/* <a
            href=""
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <BsPerson
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Blogs</span>}
          </a> */}

          <a
            href="#contact"
            className="btns rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineMail
              size={20}
              className="icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {hovered && <span className="tooltip2">Contact Me</span>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
