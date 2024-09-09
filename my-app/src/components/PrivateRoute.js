import PropTypes from 'prop-types';
import { Navigate, useParams } from 'react-router-dom'; // Import useParams
import { useAuth } from '../context/AuthContext';

function PrivateRoute({ element }) {
  const { user } = useAuth();
  const { institution } = useParams(); // Get institution from URL

  // Construct the redirect path using the institution parameter
  const resolvedRedirectPath = `/${institution}/login`;

  // Conditionally render either the element or redirect
  return user ? element : <Navigate to={resolvedRedirectPath} />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
