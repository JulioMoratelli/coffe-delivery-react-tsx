import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import bannersuccess from "../../../imgs/banner-success.svg";
import { AllDivSuccess, TextConfirmed } from "./styledSuccess";

export function Success() {
  return (
    <AllDivSuccess>
        <TextConfirmed>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TextConfirmed>

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
            <img src={bannersuccess} alt="" />
          </div>
        </div>
    </AllDivSuccess>
  );
}
