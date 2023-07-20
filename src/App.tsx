import Header from "./components/Header/Header";
import Input from "./utils/Input/Input";
import Slider from "./utils/Slider/Slider";

function App() {
  return (
    <>
      <Header />
      <div>
        <Input placeholder="City"/>
        <Input placeholder="Type of real property"/>
      </div>
      <div>
        <Slider/>
        <Slider/>
      </div>
    </>
  );
}

export default App;
