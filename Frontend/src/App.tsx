import Inputs from "./components/Inputs";
// import consultarApi from "./services/api";
// const data = await consultarApi("/");
// console.log(data);

const App = () => {
  return (
    <>
      <h1 className="text-center text-3xl py-5">Calculadora Subneteo</h1>
      <div className="grid grid-cols-2">
        <Inputs />
      </div>
    </>
  );
};

export default App;
