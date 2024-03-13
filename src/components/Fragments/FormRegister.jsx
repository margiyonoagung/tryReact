import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm label="Fullname" type="text" name="fullname" placeholder="John Doe"></InputForm>
      <InputForm label="Email" type="email" name="email" placeholder="Example@mail.com"></InputForm>
      <InputForm label="Password" type="password" name="password" placeholder="*********"></InputForm>
      <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="*********"></InputForm>
      <Button classname="w-full bg-blue-600">Register</Button>
    </form>
  );
};

export default FormRegister;
