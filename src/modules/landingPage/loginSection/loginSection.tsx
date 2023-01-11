import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form, FormikHelpers } from 'formik';

import InputField from 'modules/shared/inputField/inputField';
import ButtonLarge from 'modules/shared/buttonLarge/buttonLarge';

import { validationSchema } from './validationSchema';

import './styles.scss';

interface Values {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const inputFields = [
  { name: 'email', type: 'email' },
  { name: 'password', type: 'password' },
  { name: 'firstName' },
  { name: 'lastName' },
];

const initialValues: Values = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const LoginSection: React.FC = () => {
  const { t } = useTranslation();
  const [isRegistration, setIsRegistration] = useState(false); 

  const handleSubmit = (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="login">
      <h1 className="header-secondary">
        {isRegistration ?  t('landingPage.loginSection.register') : t('landingPage.loginSection.login')}
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, isValid, dirty }) => (
          <Form className='form'>
            <div className='form-input-fields'>
              {inputFields.map((field) => (
                !(field.name === 'firstName' || field.name === 'lastName') || isRegistration ? (
                  <InputField
                    key={field.name}
                    name={field.name}
                    type={field.type}
                    label={field.name}
                  />
                ) : null
              ))}
            </div>
            <ButtonLarge
              type="submit"
              disabled={isSubmitting || !isValid || !dirty}
              onClick={submitForm}
            >
              {isRegistration ?  t('landingPage.loginSection.register') : t('landingPage.loginSection.login')}
            </ButtonLarge>
          </Form>
        )}
      </Formik>
    </div>
  );
};


export default LoginSection;