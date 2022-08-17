import React from 'react';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const { currentUser } = useAuth();
//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) => {
//           // return currentUser ? (
//           //   <Component {...props} />
//           // ) : (
//           //   <Navigate to="/login" />
//           // );
//           return currentUser ? <Outlet /> : <Navigate to="/login" />;
//         }}></Route>
//     </Routes>
//   );
// };

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
