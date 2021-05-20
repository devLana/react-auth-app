import { PropTypes } from "prop-types";

const ProtectedRoute = ({ component: Component }) => <Component />;

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
};

export default ProtectedRoute;
