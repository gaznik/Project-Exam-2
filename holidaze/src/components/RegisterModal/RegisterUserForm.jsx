import { useForm, Controller } from 'react-hook-form';
import useRegistration from '../../hooks/useRegistration';

function RegisterUserForm() {
  const { handleSubmit, control } = useForm();
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
              <input
                {...field}
                type="text"
                placeholder="Name"
                required
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail *</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="example@stud.noroff.no"
                pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
                required
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="password">Password *</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                placeholder="********"
                minLength="8"
                required
              />
            )}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar (url)</label>
          <Controller
            name="avatar"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="url" placeholder="https://example.jpg" />
            )}
          />
        </div>
        <div>
          <label htmlFor="venueManager">I am signing up as a venue manager</label>
          <Controller
            name="venueManager"
            control={control}
            defaultValue={false}
            render={({ field }) => (
                <input type="checkbox" {...field} />
            )}
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
