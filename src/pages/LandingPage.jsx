import { Link } from "react-router-dom";
import Image from "../Components/Image";
import useDocTitle from "../hooks/useDocTitle";
import constants from "../utils/Constants";

const LandingPage = () => {
  useDocTitle();

  return (
    <main>
      <header>
        <div>
          <Image />
        </div>
        <div>
          <h1>React Authentication App</h1>
        </div>
        <div>
          <p>Welcome!</p>
          <p>This is the apps landing page</p>
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
    </main>
  );
};

export default LandingPage;
