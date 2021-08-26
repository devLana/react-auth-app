import React from "react";
import Logo from "../../assets/Logo.png";
import "./index.scss";

const Image = () => (
  <picture className="site-logo">
    <source srcSet={Logo} />
    <img src={Logo} alt="Logo" loading="lazy" />
  </picture>
);

export default Image;
