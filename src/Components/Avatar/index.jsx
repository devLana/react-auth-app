import { getUser } from "../../utils/auth";
import "./index.scss";

const Avatar = () => {
  const { username } = getUser();

  return (
    <div>
      <span>
        {username.charAt(0).toUpperCase()}
        {username.charAt(1).toUpperCase()}
      </span>
    </div>
  );
};

export default Avatar;
