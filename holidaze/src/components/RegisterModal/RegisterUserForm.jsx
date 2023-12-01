import { useForm, Controller } from 'react-hook-form';
import useRegistration from '../../hooks/useRegistration';

function RegisterUserForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { isRegistering, registrationError, register } = useRegistration();

  const onSubmit = async (data) => {
    const registrationResult = await register({
      name: data.name,
      email: data.email,
      password: data.password,
      avatar: data.avatar,
      venueManager: data.venueManager,
    });

    if (registrationResult) {
      console.log('Registration successful:', registrationResult);
    } else {
      console.log('Registration failed:', registrationError);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Username *</label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} type="text" placeholder="Name" />
                {errors.name && (
                  <p className="error-message">{errors.name.message}</p>
                )}
              </div>
            )}
            rules={{ required: 'Username is required', minLength: { value: 3, message: "Must be at least 3 characters long" } }}
/>
        </div>
        <div>
          <label htmlFor="email">E-mail *</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} type="email" placeholder="example@stud.noroff.no" />
                {errors.email && (
                  <p className="error-message">{errors.email.message}</p>
                )}
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
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} type="password" placeholder="********" />
                {errors.password && (
                  <p className="error-message">{errors.password.message}</p>
                )}
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
        </div>
        <div>
          <label htmlFor="avatar">Avatar (url)</label>
          <Controller
            name="avatar"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input {...field} type="url" placeholder="https://example.jpg" />
              </div>
            )}
          />
        </div>
        <div>
          <label htmlFor="venueManager">I am signing up as a venue manager</label>
          <Controller
            name="venueManager"
            control={control}
            defaultValue={false}
            render={({ field }) => <input type="checkbox" {...field} />}
          />
        </div>
        <p>You can always change this later.</p>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterUserForm;
