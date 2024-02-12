import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import bannersuccess from "../../../imgs/banner-success.svg";
import { AllDivSuccess, DivIconsSvg, DivStyleContext, GradientStyledA, StatusDelivery, StyledStatusDelivery, TextConfirmed } from "./styledSuccess";

export function Success() {
  return (
    <AllDivSuccess>

      <DivStyleContext>
        <TextConfirmed>
          <h1>Uhul! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TextConfirmed>

        <StyledStatusDelivery>
          <GradientStyledA>
            <StatusDelivery>
              <div>
                <DivIconsSvg>
                  <MapPin size={24} />
                </DivIconsSvg>

                <span>
                  <p>Entrega em Rua João Daniel Martinelli, 102, Farrapos - Porto Alegre, RS</p>
                </span>
              </div>
              <div>
                <DivIconsSvg style={{ background: "#DBAC2C" }}>
                  <Timer size={24} />
                </DivIconsSvg>

                <span>
                  Previsão de entrega
                  <p>
                    20 min - 30 min
                  </p>
                </span>
              </div>
              <div>
                <DivIconsSvg style={{ background: "#90d57b" }}>
                  <CurrencyDollar size={24} />
                </DivIconsSvg>

                <span>
                  <p>Pagamento na entrega </p>
                  Cartão de Crédito
                </span>
              </div>
            </StatusDelivery>
          </GradientStyledA>
          <div>
            <img src={bannersuccess} alt="" />
          </div>
        </StyledStatusDelivery>
      </DivStyleContext>

    </AllDivSuccess >
  );
}
