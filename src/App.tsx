import React from 'react';
import {
  BrowserRouter as RouterProvider,
  Routes,
  Route,
} from 'react-router-dom';

import './i18n';
import ButtonsPage from './modules/buttonsPage/buttonsPage';
import HeaderSection from './modules/landingPage/headerSection/headerSection';
import LandingPage from 'modules/landingPage/landingPage';
import LoginSection from 'modules/landingPage/loginSection/loginSection';


const App = () => {
  return (
    <>
     <RouterProvider>
        <Routes>
          <Route path="/" >
            <Route path="/" index element={<LandingPage />} />
            <Route path="/home" element={<HeaderSection />} />
            <Route path="/buttons" element={<ButtonsPage />} />
            <Route path="/login" element={<LoginSection />} />
          </Route>
        </Routes>
      </RouterProvider>

    </>
  );
};

export default App;