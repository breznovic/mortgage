import Header from "./components/Header/Header";
import SliderParameters from "./components/SliderParameters/SliderParameters";
import Input from "./utils/Input/Input";
import Switch from "./utils/Switch/Switch";

function App() {
  return (
    <>
      <Header />
      <div>
        <Input placeholder="City" />
        <Input placeholder="Type of real property" />
      </div>
      <div>
        <SliderParameters />
      </div>
      <div>
        <Switch placeholder="Ensurance" />
      </div>
      <div>
        <Switch placeholder="You have our bank card" />
      </div>
    </>
  );
}

export default App;
