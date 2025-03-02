import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import NotFound from './components/NotFound';

const App = () => {
  
  const userRole = 'admin'; 
  
  
  const routes = [
    {
      path: "/admin",
      element: userRole === 'admin' ? <AdminDashboard /> : <NotFound />
    },
    {
      path: "/user",
      element: userRole === 'user' ? <UserDashboard /> : <NotFound />
    },
    {
      path: "*", 
      element: <NotFound />
    }
  ];

  const routing = useRoutes(routes);  

  return <div>{routing}</div>;
};

export default App;