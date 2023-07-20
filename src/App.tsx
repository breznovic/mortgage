import Header from "./components/Header/Header";
import Input from "./utils/Input/Input";

function App() {
  return (
    <>
      <Header />
      <div>
        <Input placeholder="City"/>
        <Input placeholder="Type of real property"/>
      </div>
    </>
  );
}

export default App;
