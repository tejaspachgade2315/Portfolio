import React from 'react'

const CodingCard = () => {
  return (
    <div>CodingCard</div>
  )
}

export default CodingCard





// import React from "react";
// import { FaRegFileAlt } from "react-icons/fa";
// import { LuDownload } from "react-icons/lu";
// import { IoClose } from "react-icons/io5";
// import { motion } from "framer-motion";

// function Card({ data, reference }) {
//   return (
//     <motion.div
//       animate={{ x: 100, repeatType: "reverse", repeat: Infinity, y: 100 }}
//       drag
//       dragConstraints={reference}
//       whileDrag={{ scale: 1.2 }}
//       dragElastic={1}
//       dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
//       className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
//     >
//       <FaRegFileAlt />
//       <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
//       <div className="footer absolute bottom-0 w-full left-0">
//         <div className="flex items-center justify-between px-8 py-3 mb-5">
//           <h5>.4mb</h5>
//           <span className="w-7 h-7 bg-sky-100 rounded-full flex items-center justify-center">
//             {data.close ? (
//               <IoClose size=".8em" color="#000" />
//             ) : (
//               <LuDownload size=".8em" color="#000" />
//             )}
//           </span>
//         </div>
//         {data.tag.isOpen && (
//           <div
//             className={`tag w-full py-4 ${
//               data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
//             } flex items-center justify-center`}
//           >
//             <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
//           </div>
//         )}
//       </div>{" "}
//     </motion.div>
//   );
// }

// export default Card;
