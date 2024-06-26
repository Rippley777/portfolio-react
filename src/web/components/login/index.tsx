import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { signIn } from '../../../shared/auth/authService';
import { setUserData } from '../../../shared/store/reducers/users';
import { useUserLogin } from '../../../shared/api/user';
import { Input } from '../../components/form/input';
import Button from '../../components/buttons';

type LoginFormProps = {
  setError: (error: string) => void;
  onLoginSuccess?: () => void;
  redirectToProfile?: boolean;
};
const LoginForm = ({
  setError,
  onLoginSuccess,
  redirectToProfile,
}: LoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();
  const { mutate } = useUserLogin();

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const userCredential = await signIn(values.email, values.password);
      mutate({
        email: userCredential.user.email,
        username: userCredential.user.displayName || userCredential.user.email,
      });
      dispatch(setUserData({ email: values.email, ...userCredential }));
      onLoginSuccess?.();
      if (redirectToProfile) window.location.href = '/profile';
    } catch (error: any) {
      setError(error.message);
      console.error(error.message);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: 'First name is required' }}
        render={({ field }) => <Input {...field} data-testid="email" />}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <Controller
        name="password"
        control={control}
        rules={{ required: 'Password is required' }}
        render={({ field }) => (
          <Input {...field} type="password" data-testid="password" />
        )}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
