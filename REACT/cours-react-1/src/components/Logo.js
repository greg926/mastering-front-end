import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balise IMG sont accessible dans public */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React Word</h3>
    </div>
  );
};

export default Logo;
