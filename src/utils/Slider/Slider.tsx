import s from "./Slider.module.css";
import {
  Slider as CustomSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const Slider = () => {
  return (
    <div>
      <CustomSlider
        aria-label="slider-ex-2"
        colorScheme="blue"
        defaultValue={30}
        className={s.slider}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </CustomSlider>
    </div>
  );
};

export default Slider;
