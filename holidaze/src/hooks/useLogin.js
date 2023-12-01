import { useForm } from 'react-hook-form';
import handleLogin from '../components/LoginModal/loginHandler';

const useLoginForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    await handleLogin(data);
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
};

export default useLoginForm;
