import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ open, setOpen }) {
  const { user } = useAuth();
  
  const menuItems = user?.role === 'admin' ? [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Usuarios', path: '/admin/usuarios' },
    { name: 'Solicitudes', path: '/admin/solicitudes' }
  ] : [
    { name: 'Mi Dashboard', path: '/dashboard' },
    { name: 'Mis Solicitudes', path: '/dashboard/solicitudes' },
    { name: 'Mi Perfil', path: '/dashboard/perfil' }
  ];

  return (
     <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
           open ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
     >
        <div className='flex flex-col h-full  border-r shadow-md'>
           <div className='h-16 flex items-center justify-center'>
              <h1 className='text-xl font-bold text-primary-600'>
                 Financiera Alternativa
              </h1>
           </div>
           <nav className='flex-1 overflow-y-auto'>
              <ul className='p-4 space-y-2'>
                 {menuItems.map((item) => (
                    <li key={item.path}>
                       <Link
                          to={item.path}
                          className='block px-4 py-2 rounded-lg hover:bg-primary-50 text-gray-700 hover:text-primary-600'
                          onClick={() => setOpen(false)}
                       >
                          {item.name}
                       </Link>
                    </li>
                 ))}
              </ul>
           </nav>
        </div>
     </div>
  );
} 