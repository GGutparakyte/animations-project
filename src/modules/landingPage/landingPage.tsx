import React from 'react';
import HeaderSection from 'modules/landingPage/headerSection/headerSection';
import LoginSection from 'modules/landingPage/loginSection/loginSection';

import './styles.scss';

const LandingPage = () => {
  return (
    <>
        <HeaderSection/>
        <LoginSection/>
    </>
  );
};

export default LandingPage;