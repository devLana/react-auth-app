import { Link } from "react-router-dom";
import Image from "../Image";
import useDocTitle from "../../hooks/useDocTitle";
import constants from "../../utils/Constants";
import "./index.scss";

const LandingPage = () => {
  useDocTitle();

  return (
    <main className="landing-page__main">
      <div className="landing-page__container">
        <header>
          <div className="landing-page__logo">
            <Image />
          </div>
          <div className="landing-page__title">
            <h1>React Authentication App</h1>
          </div>
          <div className="landing-page__intro">
            <p>Welcome! This is the apps landing page</p>
          </div>
        </header>
        <section>
          <div>
            <Link to={constants.LOGIN_ROUTE}>Log in</Link>
          </div>
          <div>
            <Link to={constants.SIGN_UP_ROUTE}>Sign Up</Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
