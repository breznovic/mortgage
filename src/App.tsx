import Header from "./components/Header/Header";
import SliderParameters from "./components/SliderParameters/SliderParameters";
import Input from "./utils/Input/Input";

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
    </>
  );
}

export default App;
