import { RegisterForm } from "../components/Register/RegisterForm";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Registro">
      <RegisterForm/>
    </AuthLayout>
  );
};
