import React from "react";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";

function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">Login</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome please enter your details</p>
        <form action="">
        <InputForm label='email' type="email" name="email" placeholder="Email@mail.com"></InputForm>
          <div className="mb-6">          
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input type="password" className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-90" placeholder="*********"></input>
          </div>
          <Button classname="w-full bg-blue-600">Login</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
