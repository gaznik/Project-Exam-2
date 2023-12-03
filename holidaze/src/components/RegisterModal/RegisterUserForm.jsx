import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import useRegistration from '../../hooks/useRegistration';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

function RegisterUserForm() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { isRegistering, registrationError, register, setIsRegistering } = useRegistration();

  const onSubmit = async (data) => {
    setIsRegistering(true);
    try {
      const registrationResult = await register({
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
        venueManager: data.venueManager,
      });

      if (registrationResult) {
        setRegistrationSuccess(true);
      } else {
        console.log('Registration failed:', registrationError);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup className="mb-3">
        <FormLabel>Username *</FormLabel>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <FormControl
                {...field}
                type="text"
                placeholder="Name"
                isInvalid={!!errors.name}
              />
              {errors.name && <FormControl.Feedback type="invalid">{errors.name.message}</FormControl.Feedback>}
            </div>
          )}
          rules={{ required: 'Username is required', minLength: { value: 3, message: 'Must be at least 3 characters long' } }}
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>E-mail *</FormLabel>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <FormControl
                {...field}
                type="email"
                placeholder="example@stud.noroff.no"
                isInvalid={!!errors.email}
              />
              {errors.email && <FormControl.Feedback type="invalid">{errors.email.message}</FormControl.Feedback>}
            </div>
          )}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[\w\-.]+@(stud\.)?noroff\.no$/,
              message: 'Please enter a valid Noroff email address',
            },
          }}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Password *</FormLabel>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <FormControl
                {...field}
                type="password"
                placeholder="********"
                isInvalid={!!errors.password}
              />
              {errors.password && <FormControl.Feedback type="invalid">{errors.password.message}</FormControl.Feedback>}
            </div>
          )}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          }}
        />
      </FormGroup>

      <FormGroup className="mb-3">
        <FormLabel>Avatar (url)</FormLabel>
        <Controller
          name="avatar"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div>
              <FormControl
                {...field}
                type="url"
                placeholder="https://example.jpg"
              />
            </div>
          )}
        />
      </FormGroup>

      <div>
        <label htmlFor="venueManager">I am signing up as a venue manager</label>
        <Controller
          name="venueManager"
          control={control}
          defaultValue={false}
          render={({ field }) => <input type="checkbox" {...field} className="larger-checkbox" />}
        />
      </div>
      <div>
        <Button className="native-button" variant="primary" type="submit">Register</Button>
      </div>
      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          Registration successful! You can now log in.
        </div>
      )}
    </Form>
  );
}

export default RegisterUserForm;
