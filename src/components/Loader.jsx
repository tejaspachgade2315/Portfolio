import React from "react";

const Loader = () => {
  return (
    <div className="bg-red opacity-75 h-screen w-full bubbles">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="/loader1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Loader;
