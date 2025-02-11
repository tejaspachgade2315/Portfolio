// yet to be worked

// import "./CarouselComponent.css";
// import React from "react";

// const CarouselComponent = () => {
//   return (
//     <div className="h-[40vh] w-full bg-blue-800 flex justify-center items-center"></div>
//   );
// };

// export default CarouselComponent;

import { Carousel, IconButton } from "@material-tailwind/react";
import t1 from "../assets/t1_optimized_1000.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3_optimized_1000.jpg";
import t4 from "../assets/t4.jpg";

export default function CarouselComponent() {
  const arr = [
    {
      src: t1,
      alt: "image 1",
    },
    {
      src: t2,
      alt: "image 2",
    },
    {
      src: t3,
      alt: "image 3",
    },
    {
      src: t4,
      alt: "image 4",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center mb-4">
      <Carousel
        className="overflow-hidden mt-4 w-[970px] h-[500px] md:ml-[4rem] border-4 rounded-xl"
        autoplay={true}
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-20 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-10 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
      >
        {arr.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="okay rounded-xl w-full h-full object-contain md:object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}
