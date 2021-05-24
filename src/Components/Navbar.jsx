import { Link } from "react-router-dom";
import constants from "../utils/Constants";
import useScreenWidth from "../hooks/useScreenWidth";
import Avatar from "./Avatar";
import Image from "./Image";
import { getUser, logOut } from "../utils/auth";

const Navbar = () => {
  const screenWidth = useScreenWidth();
  const { username } = getUser();

  return (
    <nav>
      <div>
        <Link to={constants.LANDING_ROUTE}>
          <Image />
        </Link>
      </div>
      {screenWidth > 500 && (
        <div>
          <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
        </div>
      )}
      <div>
        <Avatar />
      </div>
      <div>
        <ol>
          <li>
            <div>
              <Avatar />
            </div>
          </li>
          <li>
            <Link to={`/${username}`}>View Profile</Link>
          </li>
          <li>
            <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
          </li>
          <li>
            <button onClick={logOut}>Log out</button>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
