import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <div>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div>
          <div>
            <div>
              <MapPin size={24}/>
              <span>
                <p>Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS</p>
              </span>
            </div>
            <div>
              <Timer size={24}/>
              <span>
                <p>
                Previsão de entrega 20 min - 30 min 
                </p>
              </span>
            </div>
            <div>
              <CurrencyDollar size={24}/>
              <span>
                <p>Pagamento na entrega Cartão de Crédito</p>
              </span>
            </div>
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
