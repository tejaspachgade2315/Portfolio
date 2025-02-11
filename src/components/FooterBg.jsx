import React from "react";

const FooterBg = ({ video }) => {
  return (
    <div>
      <video autoPlay loop muted className="w-screen h-[60vh] object-cover">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default FooterBg;
