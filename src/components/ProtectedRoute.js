import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const authToken = localStorage.getItem('authToken');
    return authToken ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;