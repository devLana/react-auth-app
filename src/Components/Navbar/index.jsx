import { Link, useHistory } from "react-router-dom";
import useScreenWidth from "../../hooks/useScreenWidth";
import Avatar from "../Avatar";
import Image from "../Image";
import constants from "../../utils/Constants";
import { getUser, logOut } from "../../utils/auth";
import "./index.scss";

const Navbar = () => {
  const history = useHistory();
  const screenWidth = useScreenWidth();

  const { username } = getUser();

  const redirect = () => {
    history.push(constants.LANDING_ROUTE);
  };

  const logUserOut = () => {
    logOut(redirect);
  };

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
            <button onClick={logUserOut}>Log out</button>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
