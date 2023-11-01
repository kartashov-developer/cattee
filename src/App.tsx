import { useState } from 'react';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { LoginPage, RegistrationPage, NotFoundPage } from '@pages/index';

import './App.css';

/*  */
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>{isAuth ? <MainRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}

export default App;
