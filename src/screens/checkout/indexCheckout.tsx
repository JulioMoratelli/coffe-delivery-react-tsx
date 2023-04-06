import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";
import {
  StyledAllCheckout,
  DeliveryAddress,
  DivFormAddress,
  FormStyledInput,
  Payment,
} from "./styledCheckout";

export function Checkout() {

  return (
    <StyledAllCheckout>
      <p>Complete seu pedido</p>

      <DeliveryAddress>
        <DivFormAddress>
          <MapPinLine size={24} />
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
          <FormStyledInput action="">
            <input style={{width: "200px"}} type="number" placeholder="CEP" required />
            <input style={{width: "560px"}} type="text" placeholder="Rua" required />
            <div>
              <input style={{width: "200px"}} type="number" placeholder="Número" required />
              <input style={{width: "348px"}} type="text" placeholder="Complemento" />
            </div>
            <div>
              <input style={{width: "200px"}} type="text" placeholder="Bairro" required />
              <input style={{width: "276px"}} type="text" placeholder="Cidade" required />
              <input style={{width: "60px"}} type="text" placeholder="UF" required />
            </div>
          </FormStyledInput>
        </DivFormAddress>

        <Payment>
          <CurrencyDollar/>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          <div>
            <button>cartão de crédito</button>
            <button>cartãod e débito</button>
            <button>dinheiro</button>
          </div>
        </Payment>
      </DeliveryAddress>
    </StyledAllCheckout>
  );
}
