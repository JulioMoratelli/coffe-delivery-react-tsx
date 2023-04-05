import { MapPinLine } from "@phosphor-icons/react";
import { StyledAllCheckout } from "./styledCheckout";

export function Checkout() {
  return (
    <StyledAllCheckout>
      <div>
        <p>Complete seu pedido</p>

        <div>
          <MapPinLine size={24} />
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <form action="">
            <input type="number" placeholder="CEP" required />
            <input type="text" placeholder="Nome" required />
            <input type="number" placeholder="Número" required />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" required/>
            <input type="text" placeholder="Cidade" required />
            <input type="text" placeholder="UF" required />
          </form>
        </div>

        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

          <div>
            <button>cartão de crédito</button>
            <button>cartãod e débito</button>
            <button>dinheiro</button>
          </div>
        </div>
      </div>
    </StyledAllCheckout>
  );
}
