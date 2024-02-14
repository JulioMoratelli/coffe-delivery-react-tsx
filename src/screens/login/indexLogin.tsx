import { useState } from "react";
import { AlignDivCenter, AllDivs, ButtonAccess, DivAllForm, DivButtonAcces } from "./styledLogin";
import { SingIn } from "../../components/singin/indexSingin";
import { RegisterUser } from "../../components/register/indexRegisterUser";

export function Login() {
  const [focusButtonSingin, setFocusButtonSingin] = useState<boolean>(true);
  const [focusButtonRegister, setFocusButtonRegister] = useState<boolean>(false);


  function handleLoginButton() {
    setFocusButtonSingin(true);

    setFocusButtonRegister(false);
  }

  function handleRegisterButton() {
    setFocusButtonRegister(true);

    setFocusButtonSingin(false);
  }


  return (
    <AlignDivCenter>
      <AllDivs>
        <h1>Preencha seus dados</h1>
        <DivAllForm>
          <DivButtonAcces>
            <div>
              <button onClick={() => handleLoginButton()}>Login</button>
              <button onClick={() => handleRegisterButton()}>Cadastrar</button>
            </div>
          </DivButtonAcces>


          {focusButtonSingin ? <SingIn /> : <RegisterUser />}

          <ButtonAccess>
            <button>Acessar</button>
          </ButtonAccess>
        </DivAllForm>
      </AllDivs>
    </AlignDivCenter>
  )
}