import styled from "styled-components";

export const Input = styled.input`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: white;
  background-color: transparent;
  height: 20px;
  color: white;
  width: -webkit-fill-available;
  padding: 12px;

  ::-webkit-input-placeholder {
    color: #bababa;
  }
  :-ms-input-placeholder {
    color: #bababa;
  }
`;

export const InputContainer = styled.div`
  margin: 40px 0;
`;
