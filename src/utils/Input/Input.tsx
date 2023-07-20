import { Input as CustomInput } from "@chakra-ui/react";
import s from "./Input.module.css";

type PropsType = {
  placeholder: string;
};

const Input = (props: PropsType) => {
  return (
    <div>
      <CustomInput
        placeholder={props.placeholder}
        size="lg"
        className={s.input}
      />
    </div>
  );
};

export default Input;
