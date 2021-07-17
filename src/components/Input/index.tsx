import React from "react";
import * as S from "./styles";

interface IInput {
  onChange: (e: any) => any;
  value: string;
  label: string;
  type: string;
}

const Input = (props: IInput) => {
  const { value, label, onChange, type } = props;

  return (
    <S.InputContainer>
      <S.Input
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      ></S.Input>
    </S.InputContainer>
  );
};

export default Input;
