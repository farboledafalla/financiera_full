import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Login() {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [error, setError] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const formData = new FormData(e.target);
         await login({
            email: formData.get('email'),
            password: formData.get('password'),
         });
         navigate('/dashboard');
      } catch (err) {
         setError('Credenciales inválidas');
      }
   };

   return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
         <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow'>
            <h2 className='text-3xl font-bold text-center'>Iniciar Sesión</h2>
            {error && (
               <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
                  {error}
               </div>
            )}
            <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
               <div>
                  <label
                     htmlFor='email'
                     className='block text-sm font-medium text-gray-700'
                  >
                     Email
                  </label>
                  <input
                     id='email'
                     name='email'
                     type='email'
                     required
                     className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mt-1'
                  />
               </div>
               <div>
                  <label
                     htmlFor='password'
                     className='block text-sm font-medium text-gray-700'
                  >
                     Contraseña
                  </label>
                  <input
                     id='password'
                     name='password'
                     type='password'
                     required
                     className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mt-1'
                  />
               </div>
               <button
                  type='submit'
                  className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-primary-700 transition-colors w-full'
               >
                  Ingresar
               </button>
            </form>
            <div className='text-center'>
               <Link
                  to='/auth/register'
                  className='text-blue-500 hover:underline'
               >
                  ¿No tienes una cuenta? Regístrate aquí.
               </Link>
            </div>
         </div>
      </div>
   );
}
