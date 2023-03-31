import { ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore } from "./styledStore";

export function Store() {
  return (
    <div>
      <p>Nossos Cafés</p>
      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>TRADICIONAL</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          <input type="number" min={0} />
          <button>
            <ShoppingCart size={24} />
          </button>
        </StyledFormAddToCart>
      </StyledStore>
    </div>
  );
}
