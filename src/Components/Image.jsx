import Logo from "../assets/Logo.png";

const Image = () => {
  return (
    <picture>
      <source srcSet={Logo} />
      <img src={Logo} alt="Logo" loading="lazy" />
    </picture>
  );
};

export default Image;
