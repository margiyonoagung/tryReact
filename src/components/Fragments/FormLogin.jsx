import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm label="Email" type="email" name="email" placeholder="Example@mail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*********"></InputForm>
      <Button classname="w-full bg-blue-600">Login</Button>
    </form>
  );
};

export default FormLogin;
