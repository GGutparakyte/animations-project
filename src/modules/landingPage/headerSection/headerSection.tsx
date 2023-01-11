import React from 'react';
import { useTranslation } from 'react-i18next';

import ButtonLarge from 'modules/shared/buttonLarge/buttonLarge';
import Navbar from 'modules/shared/navbar/navbar';

import './styles.scss';

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="header">
        <Navbar />
        <div className="text-box">
          <h1 className="header-primary">
            <span className="header-primary-main">{t('landingPage.headerSection.title')}</span>
            <span className="header-primary-sub">
              {t('landingPage.headerSection.subTitle')}
            </span>
          </h1>
          <ButtonLarge>{t('buttons.explore')}</ButtonLarge> 
          <div></div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
