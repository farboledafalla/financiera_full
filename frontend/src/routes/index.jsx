import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import DashboardAdmin from '../pages/DashboardAdmin';
import DashboardUsuario from '../pages/DashboardUsuario';
import UsuariosPage from '../pages/admin/UsuariosPage';
import SolicitudesPage from '../pages/admin/SolicitudesPage';
import PerfilUsuario from '../pages/usuario/PerfilUsuario';
import MisSolicitudes from '../pages/usuario/MisSolicitudes';

export default function AppRoutes() {
   return (
      <Routes>
         {/* Ruta raíz */}
         <Route path='/' element={<Navigate to='/login' replace />} />

         {/* Ruta de autenticación */}
         <Route path='/login' element={<Login />} />

         {/* Ruta de registro */}
         <Route path='/auth/register' element={<Register />} />

         {/* Rutas de administrador */}
         <Route
            path='/admin'
            element={
               <PrivateRoute role='admin'>
                  <DashboardAdmin />
               </PrivateRoute>
            }
         />
         <Route
            path='/admin/usuarios'
            element={
               <PrivateRoute role='admin'>
                  <UsuariosPage />
               </PrivateRoute>
            }
         />
         <Route
            path='/admin/solicitudes'
            element={
               <PrivateRoute role='admin'>
                  <SolicitudesPage />
               </PrivateRoute>
            }
         />

         {/* Rutas de usuario */}
         <Route
            path='/dashboard'
            element={
               <PrivateRoute role='usuario'>
                  <DashboardUsuario />
               </PrivateRoute>
            }
         />
         <Route
            path='/dashboard/perfil'
            element={
               <PrivateRoute role='usuario'>
                  <PerfilUsuario />
               </PrivateRoute>
            }
         />
         <Route
            path='/dashboard/solicitudes'
            element={
               <PrivateRoute role='usuario'>
                  <MisSolicitudes />
               </PrivateRoute>
            }
         />

         {/* Ruta 404 */}
         <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
   );
}
