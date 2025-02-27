import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { registerUser } from '../../services/auth.service';

export default function Register() {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [error, setError] = useState('');
   const [formData, setFormData] = useState({
      email: '',
      password: '',
      nombre: '',
      apellido: '',
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         // Llama al servicio para registrar al usuario
         await registerUser(formData);
         // Si el registro es exitoso, puedes iniciar sesión automáticamente
         await login({ email: formData.email, password: formData.password });
         navigate('/dashboard');
      } catch (err) {
         setError('Error al registrar el usuario');
      }
   };

   return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
         <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow'>
            <h2 className='text-3xl font-bold text-center'>Registro</h2>
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
                     onChange={handleChange}
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
                     onChange={handleChange}
                     className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mt-1'
                  />
               </div>
               <div>
                  <label
                     htmlFor='nombre'
                     className='block text-sm font-medium text-gray-700'
                  >
                     Nombre
                  </label>
                  <input
                     id='nombre'
                     name='nombre'
                     type='text'
                     required
                     onChange={handleChange}
                     className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mt-1'
                  />
               </div>
               <div>
                  <label
                     htmlFor='apellido'
                     className='block text-sm font-medium text-gray-700'
                  >
                     Apellido
                  </label>
                  <input
                     id='apellido'
                     name='apellido'
                     type='text'
                     required
                     onChange={handleChange}
                     className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent mt-1'
                  />
               </div>
               <button
                  type='submit'
                  className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-primary-700 transition-colors w-full'
               >
                  Registrarse
               </button>
            </form>
            <div className='text-center'>
               <Link to='/auth/login' className='text-blue-500 hover:underline'>
                  ¿Tienes una cuenta? Ingresa aquí.
               </Link>
            </div>
         </div>
      </div>
   );
}
