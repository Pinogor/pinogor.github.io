import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import '../form-style.scss';
import '../../../index.css';

interface IFormInputs {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div>
        <label htmlFor="username">{t('registrationForm.username')}</label>
        <input
          id="username"
          {...register('username', { required: t('registrationForm.usernameRequired') })}
          type="text"
          placeholder={t('registrationForm.placeholderUsername')}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div>
        <label htmlFor="email">{t('registrationForm.email')}</label>
        <input
          id="email"
          {...register('email', {
            required: t('registrationForm.emailRequired'),
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: t('registrationForm.invalidEmail'),
            },
          })}
          type="email"
          placeholder={t('registrationForm.placeholderEmail')}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">{t('registrationForm.password')}</label>
        <input
          id="password"
          {...register('password', {
            required: t('registrationForm.passwordRequired'),
            minLength: {
              value: 6,
              message: t('registrationForm.passwordMinLength'),
            },
          })}
          type="password"
          placeholder={t('registrationForm.placeholderPassword')}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit">{t('registrationForm.submitButton')}</button>
    </form>
  );
};

export default RegistrationForm;
