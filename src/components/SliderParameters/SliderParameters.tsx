import Slider from "../../utils/Slider/Slider";
import s from "./SliderParameters.module.css";

const SliderParameters = () => {
  return (
    <>
      <div className={s.label}>Cost of real estate </div>
      <Slider minMarkValue={600} maxMarkValue={1000}/>
      <div className={s.label}>First payment amount </div>
      <Slider minMarkValue={60000} maxMarkValue={100000}/>
      <div className={s.label}>Loan term </div>
      <Slider minMarkValue={6000000} maxMarkValue={100000000}/>
    </>
  );
};

export default SliderParameters;
