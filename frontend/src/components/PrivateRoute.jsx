import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, role }) => {
  const { user, loading } = useAuth();
  
  if (loading) return null;
  
  if (!user) return <Navigate to="/login" />;
  
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }
  
  return children;
};

export default PrivateRoute; 