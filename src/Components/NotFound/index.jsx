import { Link } from "react-router-dom";
import Layout from "../Layout";
import useDocTitle from "../../hooks/useDocTitle";
import constants from "../../utils/Constants";
import "./index.scss";

const NotFound = () => {
  useDocTitle("Not Found");

  return (
    <Layout>
      <main className="not-found__main">
        <header>
          <h1>Not Found</h1>
        </header>
        <section>
          <div className="not-found__text">
            <p>The content you are looking for does not exist</p>
          </div>
          <div className="not-found__link">
            <Link to={constants.LANDING_ROUTE}>Go home</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default NotFound;
