import styled from "styled-components";

export const HomeContainer = styled.div`
  align-items: center;
  width: -webkit-fill-available;
`;

export const Center = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;
  font-weight: lighter;
  text-align: left;
  width: 400px;
`;

export const LoginBox = styled.div`
  text-align: center;
  margin-top: 32px;
  width: 400px;
  margin-bottom: 20px;
  border: 0;
`;

export const Input = styled.input`
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: white;
  background-color: transparent;
  height: 42px;
`;

export const Button = styled.button`
  border: solid 2px white;
  color: white;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 10px 22px;
  font-size: 13px;

  :hover {
    background-color: #404352;
  }
`;

export const ButtonContainer = styled.div`
  button + button {
    margin-left: 10px;
  }
`;

export const ButtonLink = styled.button`
  color: white;
  letter-spacing: 2px;
  border-radius: 10px;
  padding: 10px 22px;
  font-size: 13px;
`;
