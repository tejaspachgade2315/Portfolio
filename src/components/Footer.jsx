import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
// import Tilt from "react-parallax-tilt";
import FooterBg from "./FooterBg";

const Footer = () => {
  return (
    <>
      <div className="w-full py-2 h-[60vh] relative">
        <div className="one">
          <FooterBg video="./footerbg.mp4" />
        </div>
        <div className="gap-2 w-full h-full flex justify-center items-center absolute two inset-0 z-10">
          <span className="bannerIcon animate-pulse">
            <a
              href="https://github.com/tejaspachgade2315"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="transform hover:scale-125 duration-500 ease-in-out">
                <SiGithub size={30} />
              </div>
            </a>
          </span>
          <span className="bannerIcon animate-pulse">
            <a
              href="mailto:tejaspachgade2315@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="transform hover:scale-125 duration-500 ease-in-out">
                <SiGmail size={30} />
              </div>
            </a>
          </span>
          <span className="bannerIcon animate-pulse">
            <a
              href="https://www.linkedin.com/in/tejaspachgade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="transform hover:scale-125 duration-500 ease-in-out">
                <FaLinkedin size={30} />
              </div>
            </a>
          </span>
          <span className="bannerIcon animate-pulse">
            <a
              href="https://www.instagram.com/tejaspachgade_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="transform hover:scale-125 duration-500 ease-in-out">
                <BsInstagram size={30} />
              </div>
            </a>
          </span>
        </div>
        <div className="w-full text-center">
          <span className="ml-8">
            @2023. All rights reserved by Tejas Pachgade
          </span>
        </div>
      </div>
    </>
  );
};

// const Footer = () => {
//   return (
//     <div className="w-full py-8 flex items-center flex-col justify-center bg-clr/90 sabsebadaclass">
//       <Tilt>
//         <img
//           className="w-32 rounded-[50%] transition-all ease-out duration-300"
//           alt="logo"
//           src="/bg-tejas.jpg"
//         />
//       </Tilt>

//       <div className="flex-gap-4 badaclass">
//         <span className="bannerIcon">
//           <a
//             href="https://github.com/tejaspachgade2315"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="transform hover:scale-125 duration-500 ease-in-out">
//               <SiGithub size={30} />
//             </div>
//           </a>
//         </span>
//         <span className="bannerIcon">
//           <a
//             href="mailto:tejaspachgade2315@gmail.com"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="transform hover:scale-125 duration-500 ease-in-out">
//               <SiGmail size={30} />
//             </div>
//           </a>
//         </span>
//         <span className="bannerIcon">
//           <a
//             href="https://www.linkedin.com/in/tejaspachgade/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="transform hover:scale-125 duration-500 ease-in-out">
//               <FaLinkedin size={30} />
//             </div>
//           </a>
//         </span>
//         <span className="bannerIcon">
//           <a
//             href="https://www.instagram.com/tejaspachgade_/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className="transform hover:scale-125 duration-500 ease-in-out">
//               <BsInstagram size={30} />
//             </div>
//           </a>
//         </span>
//       </div>
//       <div>
//         <p className="pl-4 my-[-50px]">
//           @2023. All rights reserved by Tejas Pachgade
//         </p>
//       </div>
//     </div>
//   );
// };

export default Footer;
