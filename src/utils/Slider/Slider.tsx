import { useState } from "react";
import s from "./Slider.module.css";
import {
  Slider as CustomSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

type PropsType = {
  minMarkValue: number;
  maxMarkValue: number;
};

const Slider = (props: PropsType) => {
  const [sliderValue, setSliderValue] = useState(props.minMarkValue);

  return (
    <div>
      <CustomSlider
        aria-label="slider-ex-2"
        colorScheme="blue"
        defaultValue={props.minMarkValue}
        className={s.slider}
        onChange={(val) => setSliderValue(val)}
      >
        <SliderMark value={2}>{props.minMarkValue}</SliderMark>
        <SliderMark value={85}><div className={s.maxMark}>{props.maxMarkValue}</div></SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </CustomSlider>
    </div>
  );
};

export default Slider;
