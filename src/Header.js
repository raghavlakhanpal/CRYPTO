import React from "react";

export default () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>CRYPTO</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/88/88746.png"
            className="logo-img"
            alt="Logo"
          />
        </div>
        <h1>Collectible Kicks for the digital age.</h1>
        <div className="trademark">
          <strong> CryptoSneaks</strong>
          <sup>TM</sup> are meticulously handmade, digital shoes
        </div>
        <div className="signup-bar">
          <input type="text" placeholder="you@youremail.com" />
          <button>Sign me up!</button>
        </div>
        <div className="declaration">
          Email address used solely for shoe drop notifications. Scout's Honor.
        </div>
      </div>
    </>
  );
};
