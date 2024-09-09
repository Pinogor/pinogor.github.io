import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../form-style.scss';
import '../../../index.css';

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div>
        <label htmlFor="email">{t('loginForm.email')}</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: t('loginForm.emailRequired'),
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: t('loginForm.invalidEmail'),
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">{t('loginForm.password')}</label>
        <input
          type="password"
          id="password"
          {...register('password', {
            required: t('loginForm.passwordRequired'),
            minLength: {
              value: 9,
              message: t('loginForm.passwordMinLength'),
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">{t('loginForm.submitButton')}</button>
    </form>
  );
};

export default LoginForm;
