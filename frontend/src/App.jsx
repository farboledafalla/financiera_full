import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes';

function App() {
   return (
      <AuthProvider>
         <BrowserRouter>
            <div className='min-h-screen bg-gray-50'>
               <AppRoutes />
            </div>
         </BrowserRouter>
      </AuthProvider>
   );
}

export default App;
