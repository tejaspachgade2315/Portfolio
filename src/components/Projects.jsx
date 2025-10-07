import React from "react";
import ProjectItem from "./ProjectItem";
import portfolioImg from "../assets/Project1.png";
import paytmImg from "../assets/Project2.png";
import kursiImg from "../assets/Project3.png";
import galleryImg from "../assets/Project4.png";
import utsavImg from "../assets/Project5.png";
import mantImg from "../assets/Project6.png";
import sgpaImg from "../assets/Project7.png";
import todoImg from "../assets/Project8.png";
import pingImg from "../assets/Project9.png";
import razorImg from "../assets/Project10.png";
import gifImg from "../assets/Project11.png";
import reduxImg from "../assets/Project12.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] headings">
        Projects
      </h1>
      <p className="text-center text-lg py-8">
        Greetings, I'm Tejas Pachgade. I'm a undergraduate B.Tech student, and this
        website serves as my portfolio, exhibiting the things I've already
        created. I'm hoping you'll like it. I'm learning to be a full-stack web
        developer. I have a strong interest in open source as well as
        programming and development.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={portfolioImg}
          url={"https://tejaspachgade.netlify.app/"}
          title="Portfolio"
        />

        <ProjectItem
          img={paytmImg}
          url={"https://tejaspachgade4.netlify.app/"}
          title="Paytm Clone"
        />

        <ProjectItem
          img={utsavImg}
          url={"https://utsav2k24.in/"}
          title="Utsav 2024 Official Website"
        />

        <ProjectItem
          img={mantImg}
          url={"https://tmpmant.vercel.app/"}
          title="Mantissa Calculator"
        />

        <ProjectItem
          img={sgpaImg}
          url={"https://sgpacalculator-tejaspachgade.vercel.app/"}
          title="SGPA Calculator"
        />

        <ProjectItem
          img={todoImg}
          url={"https://tejaspachgade3.vercel.app/"}
          title="To-Do List"
        />

        <ProjectItem
          img={pingImg}
          url={"https://tejaspachgade4.vercel.app/"}
          title="Ping Pong Game"
        />

        <ProjectItem
          img={razorImg}
          url={"https://tejaspachgade2.vercel.app/"}
          title="Razorpay Clone"
        />

        <ProjectItem
          img={kursiImg}
          url={"https://tejaspachgade2.netlify.app/"}
          title="Telford Kursi"
        />

        <ProjectItem
          img={galleryImg}
          url={"https://tejaspachgade3.netlify.app/"}
          title="Image Gallery"
        />

        <ProjectItem
          img={gifImg}
          url={"https://gif-generator-mauve.vercel.app/"}
          title="GIF Search Engine"
        />

        <ProjectItem
          img={reduxImg}
          url={"https://redux-cart-lovat.vercel.app/"}
          title="Redux Cart"
        />
      </div>
    </div>
  );
};

export default Projects;
