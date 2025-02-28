import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children, role }) => {
   const { user, loading } = useAuth();

   if (loading) return null;

   // Si no existe el usuario, redirige a la página de login
   if (!user) {
      return <Navigate to='/login' />;
   }

   // Si existe el usuario pero no tiene el rol requerido, redirige a la página de inicio
   if (role && user.role !== role) {
      return <Navigate to='/' />;
   }

   return children;
};

export default PrivateRoute;
