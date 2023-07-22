import {
  Switch as CustomSwitch,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import s from "./Switch.module.css";

type PropsType = { placeholder: string };

const Switch = (props: PropsType) => {
  console.log(props.placeholder, "place");

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="email-alerts" mb="0">
        <div className={s.container}>
          <div className={s.placeholder}>{props.placeholder}</div>
          <div className={s.spacer} />
        </div>
      </FormLabel>
      <CustomSwitch size="lg" />
    </FormControl>
  );
};

export default Switch;
