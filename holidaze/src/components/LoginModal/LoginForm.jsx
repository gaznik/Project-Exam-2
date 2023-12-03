import React from 'react';
import { Controller } from 'react-hook-form';
import { Spinner, Form, Button, FormGroup, FormControl } from 'react-bootstrap';
import useLoginForm from '../../hooks/useLogin';

const LoginForm = () => {
  const { handleSubmit, control, onSubmit, isLoggingIn } = useLoginForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="mb-3">
        <Form.Label>Email</Form.Label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl
              {...field}
              type="email"
              placeholder="example@stud.noroff.no"
              required
            />
          )}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <Form.Label>Password</Form.Label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl
              {...field}
              type="password"
              placeholder="********"
              required
            />
          )}
        />
      </FormGroup>

      <div className="d-grid gap-2">
        <Button className="native-button" variant="primary" type="submit" disabled={isLoggingIn}>
          {isLoggingIn ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            'Login'
          )}
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
