import Slider from "../../utils/Slider/Slider";
import s from "./SliderParameters.module.css";

const SliderParameters = () => {
  return (
    <>
      <div className={s.label}>Cost of real estate </div>
      <Slider minMarkValue={0} maxMarkValue={100}/>
      <div className={s.label}>First payment amount </div>
      <Slider minMarkValue={0} maxMarkValue={100}/>
      <div className={s.label}>Loan term </div>
      <Slider minMarkValue={0} maxMarkValue={100}/>
    </>
  );
};

export default SliderParameters;
