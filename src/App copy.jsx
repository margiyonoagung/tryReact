import React from "react";

class Button2 extends React.Component {
  render() {
    return (
      <div>
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Pencet dong!
        </button>
      </div>
    );
  }
}

function ButtonRed() {
  return (
    <div>
      <button className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white" type="submit">
        Pencet dong!
      </button>
    </div>
  );
}

const ButtonSlate = () => {
  return (
    <div>
      <button className="h-10 px-6 font-semibold rounded-md bg-slate-700 text-white" type="submit">
        Pencet dong!
      </button>
    </div>
  );
};

const ButtonProps = (props) => {
  return (
    <div>
      <button className={`h-10 px-6 font-semibold rounded-md ${props.color} text-white`} type="submit">
        {props.text}
      </button>
    </div>
  );
};

const Button = (props) => {
  const { children, color } = props;
  return (
    <div>
      <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white`} type="submit">
        {children}
      </button>
    </div>
  );
};

const Button3 = (props) => {
  const { children = "... masih banyak", color = "bg-red-900" } = props;
  return (
    <div>
      <button className={`h-10 px-6 font-semibold rounded-md ${color} text-white`} type="submit">
        {children}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-blue-700 min-h-screen items-center">
      <div className="flex gap-x-3">
        <Button2 />
        <ButtonRed />
        <ButtonSlate />
        {/* Props */}
        <ButtonProps color="bg-blue-400" text="Pencet dulu" />
        <ButtonProps color="bg-blue-300" text="Tombol pencet" />
        <Button color="bg-blue-200">Pencet buru ah</Button>
        <Button3 />
      </div>
    </div>
  );
}

export default App;
