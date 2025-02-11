import React from "react";
import EducationItems from "./EducationItems";
import Hello from "./Hello";

const data = [
  {
    year: 2019,
    title: "SSC",
    duration: "84.60%",
    details: "S N C School, Karanja (Lad)",
  },
  {
    year: 2021,
    title: "HSC",
    duration: "91.17%",
    details: "Vidya Bharati Junior College, Karanja (Lad)",
  },
  {
    year: 2025,
    title: "B.Tech (Electronics & Telecommunication Engineering)",
    duration: "CGPA : 8.11",
    details:
      "Shri Guru Gobind Singhji Institute of Engineering and Technology, Vishnupuri, Nanded",
  },
];
const Education = () => {
  return (
    <div
      id="education"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-6 mt-2"
    >
      <h1 className="headings text-4xl font-bold text-center text-[#001b5e]">
        Education
      </h1>
      <div className="flex">
        <div className="">
          {data.map((item, idx) => (
            <EducationItems
              key={idx}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
        <Hello />
      </div>
    </div>
  );
};

export default Education;
