import { MapPinLine } from "@phosphor-icons/react";

export function Checkout() {
  return (
    <div>
      <div>
        <p>Complete seu pedido</p>

        <div>
          <MapPinLine size={24} />
          <p>Endereço de Entrega</p>
          Informe o endereço onde deseja receber seu pedido
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
          <p>Pagamento</p>
          O pagamento é feito na entrega. Escolha a forma que deseja pagar

          <div>
            <button>cartão de crédito</button>
            <button>cartãod e débito</button>
            <button>dinheiro</button>
          </div>
        </div>
      </div>
    </div>
  );
}
