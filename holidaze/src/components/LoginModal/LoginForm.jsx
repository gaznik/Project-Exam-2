import React from 'react';
import { Controller } from 'react-hook-form';
import useLoginForm from '../../hooks/useLogin';

const LoginForm = () => {
  const { handleSubmit, control, onSubmit } = useLoginForm();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">E-mail</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="email"
              placeholder="example@stud.noroff.no"
              required
            />
          )}
        />
        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input
              {...field}
              type="password"
              placeholder="********"
              required
            />
          )}
        />
        <div>
          <button type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
