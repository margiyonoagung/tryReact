import AuthLayout from "../components/Layouts/AuthLayouts";
import FormLogin from "../components/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-3 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-700">
          Sign Up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
