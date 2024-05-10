import { LoginForm } from "../components/Login/LoginForm";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Login">
        <LoginForm />
      </AuthLayout>
    </>
  );
};
