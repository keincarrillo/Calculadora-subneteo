import consultarApi from "./services/api";
const data = await consultarApi("/");
console.log(data);

const App = () => {
  return <h1>Olaaa</h1>;
};

export default App;
