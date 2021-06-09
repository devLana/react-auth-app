import PropTypes from "prop-types";
import Navbar from "./Navbar";
import { isLoggedIn } from "../utils/auth";

const Layout = ({ children }) => {
  const userIsLoggedIn = isLoggedIn();

  return (
    <>
      {userIsLoggedIn && <Navbar />}
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
