import { AlignDivCenter, AllDivs, DivAllForm, DivButtonSelect, FormStyledInput } from "./styledLogin";

export function Login() {
  return (
    <AlignDivCenter>
      <AllDivs>
        <h1>Preencha seus dados</h1>
        <DivAllForm>
          <DivButtonSelect>
            <button>Vender</button>
            <button>Comprar</button>
          </DivButtonSelect>
          <FormStyledInput>
            <input type="text" placeholder="HHH" />
          </FormStyledInput>
        </DivAllForm>
      </AllDivs>
    </AlignDivCenter>
  )
}