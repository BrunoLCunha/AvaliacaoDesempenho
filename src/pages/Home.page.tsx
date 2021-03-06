import React, { useState } from "react";
import * as S from "./Home.styles";
import Input from "../components/Input";

function Home() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const validateUser = () => {
    if (password === "123456" && user === "admin") {
      setIsInvalid(false);
      window.open("/dashboard", "_self");
      return;
    }

    setIsInvalid(true);
  };

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ backgroundColor: "#29313C" }}
    >
      <S.HomeContainer id="wrapper">
        <S.Center>
          <S.Title>Bem-vindo(a) ao Performance Portal</S.Title>
          <S.LoginBox>
            {isInvalid && (
              <S.IncorrectCredentials>
                Credenciais incorretas, tente novamente.
              </S.IncorrectCredentials>
            )}
            <Input
              label="Usuário"
              onChange={setUser}
              value={user}
              type="text"
            ></Input>
            <Input
              type="password"
              label="Senha"
              onChange={setPassword}
              value={password}
            ></Input>
          </S.LoginBox>
          <S.ButtonContainer>
            <S.Button onClick={() => validateUser()}>ENTRAR</S.Button>
            <S.ButtonLink onClick={() => undefined}>
              Esqueci a senha
            </S.ButtonLink>
          </S.ButtonContainer>
        </S.Center>
      </S.HomeContainer>
    </div>
  );
}

export default Home;
