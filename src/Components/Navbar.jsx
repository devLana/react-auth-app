import { Link } from "react-router-dom";
import constants from "../utils/Constants";
import Avatar from "./Avatar";
import Image from "./Image";

const Navbar = () => (
  <nav>
    <div>
      <Link to={constants.LANDING_ROUTE}>
        <Image />
      </Link>
    </div>
    <div>
      <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
    </div>
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
          <span>View Profile</span>
        </li>
        <li>
          <Link to={constants.DASHBOARD_ROUTE}>Dashboard</Link>
        </li>
        <li>
          <span>Logout</span>
        </li>
      </ol>
    </div>
  </nav>
);

export default Navbar;
