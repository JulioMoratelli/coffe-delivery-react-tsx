import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import cart from "../../../../imgs/cart.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore, StyledGlobalStore, ButtonShoppingCart } from "./styledStore";

export function Store() {
  return (
    <StyledGlobalStore>
      <p>Nossos Cafés</p>
      <article>
      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>tradicional</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          
          <div>
            <button>
              <Minus size={15}/>
            </button>
            <p>1</p>
            <button>
              <Plus size={15}/>
            </button>
          </div>

          <ButtonShoppingCart>
            <img src={cart} alt="" />
          </ButtonShoppingCart>
        </StyledFormAddToCart>
      </StyledStore>

      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>tradicional</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          
          <div>
            <button>
              <Minus size={15}/>
            </button>
            <p>1</p>
            <button>
              <Plus size={15}/>
            </button>
          </div>

          <ButtonShoppingCart>
            <img src={cart} alt="" />
          </ButtonShoppingCart>
        </StyledFormAddToCart>
      </StyledStore>

      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>tradicional</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          
          <div>
            <button>
              <Minus size={15}/>
            </button>
            <p>1</p>
            <button>
              <Plus size={15}/>
            </button>
          </div>

          <ButtonShoppingCart>
            <img src={cart} alt="" />
          </ButtonShoppingCart>
        </StyledFormAddToCart>
      </StyledStore>

      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>tradicional</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          
          <div>
            <button>
              <Minus size={15}/>
            </button>
            <p>1</p>
            <button>
              <Plus size={15}/>
            </button>
          </div>

          <ButtonShoppingCart>
            <img src={cart} alt="" />
          </ButtonShoppingCart>
        </StyledFormAddToCart>
      </StyledStore>

      <StyledStore>
        <StyledImgCoffe>
          <img src={coffes} alt="" />
          <p>tradicional</p>
        </StyledImgCoffe>

        <StyledTextDescription>
          <p>Expresso Tradicional</p>
          O tradicional café feito com água quente e
          grãos moídos
        </StyledTextDescription>

        <StyledFormAddToCart>
          R$ <p>9,90</p>
          
          <div>
            <button>
              <Minus size={15}/>
            </button>
            <p>1</p>
            <button>
              <Plus size={15}/>
            </button>
          </div>

          <ButtonShoppingCart>
            <img src={cart} alt="" />
          </ButtonShoppingCart>
        </StyledFormAddToCart>
      </StyledStore>
      </article>
    </StyledGlobalStore>
  );
}
