import { FormStyledInput } from "./styledRegisterUser";

export function RegisterUser() {
  return (
    <FormStyledInput>
      <input type="text" placeholder="Nome Completo" />
      <input type="tel" placeholder="Telefone" />
      <input type="date" placeholder="Data de Nascimento" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Senha" />
    </FormStyledInput>
  )
}