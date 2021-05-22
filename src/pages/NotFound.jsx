import { Link } from "react-router-dom";
import useDocTitle from "../hooks/useDocTitle";
import constants from "../utils/Constants";

const NotFound = () => {
  useDocTitle("Not Found");

  return (
    <main>
      <header>
        <h1>Not Found</h1>
      </header>
      <section>
        <div>
          <p>The content you are looking for does not exist</p>
        </div>
        <div>
          <Link to={constants.LANDING_ROUTE}>Go home</Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
