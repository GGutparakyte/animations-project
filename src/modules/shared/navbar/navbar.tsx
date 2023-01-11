import React, { useState, FC } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonSmall from 'modules/shared/buttonSmall/buttonSmall';

import './styles.css';

const Navbar: FC = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>('en');
  const { i18n } = useTranslation();


  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  
  // languages turėtų būti padarytas su map dinamiškai
  return (
    <div className='navbar'>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/buttons">Buttons</a></li>
        <li><a href="/login">Login</a></li> 
      </ul>
      <div className='languages'> 
        <ButtonSmall className="btn btn-lang" value={lang} onClick={() => changeLanguage('lt')} text="LT"/>
        <ButtonSmall className="btn btn-lang" value={lang} onClick={() => changeLanguage('en')} text="EN"/>
        <ButtonSmall className="btn btn-lang" value={lang} onClick={() => changeLanguage('ru')} text="RU"/>
      </div>
    </div>
  );
};

export default Navbar;