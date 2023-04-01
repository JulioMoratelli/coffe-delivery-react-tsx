import { ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore, StyledGlobalStore } from "./styledStore";

export function Store() {
  return (
    <StyledGlobalStore>
      <p>Nossos Cafés</p>
      <article>
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
      </article>
    </StyledGlobalStore>
  );
}
