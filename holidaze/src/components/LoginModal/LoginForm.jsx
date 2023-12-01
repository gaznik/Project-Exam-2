import React from 'react';
import { useForm, Controller } from 'react-hook-form'; 
import handleLogin from './loginHandler'; 

const LoginForm = () => {
  const { handleSubmit, control } = useForm(); 
  const formOnSubmit = async (data) => {
    await handleLogin(data); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formOnSubmit)}>
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
