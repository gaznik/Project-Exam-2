import React from 'react';
import { Controller } from 'react-hook-form';
import { Spinner } from 'react-bootstrap'; // Import Bootstrap Spinner
import useLoginForm from '../../hooks/useLogin';

const LoginForm = () => {
  const { handleSubmit, control, onSubmit, isLoggingIn } = useLoginForm();

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
          <button className="native-button" type="submit">
            {isLoggingIn ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              'Login'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
