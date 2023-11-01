import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginPage, RegistrationPage, NotFoundPage } from '@pages/index';

import './App.css';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}

export default App;
