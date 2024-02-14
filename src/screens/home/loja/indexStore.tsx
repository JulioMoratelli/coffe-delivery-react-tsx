import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import cart from "../../../../imgs/cart.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore, StyledGlobalStore, ButtonShoppingCart, AlignItemCenter } from "./styledStore";
import { useState } from "react";


export function Store() {
  const [qtdAddCart, setQtdAddCart] = useState(0)


  function handleAddQtd() {

    setQtdAddCart(qtdAddCart + 1)

  }

  function handleRemoveQtd() {
    if (qtdAddCart <= 0) {
      return;
    }

    setQtdAddCart(qtdAddCart - 1)
  }


  return (
    <StyledGlobalStore>
      <AlignItemCenter>
        <p>Nossos Cafés</p>
        <article>
          <StyledStore>
            <StyledImgCoffe>
              <img src={coffes} alt="" />
              <p>tradicional</p>
            </StyledImgCoffe>

            <StyledTextDescription>
              <p>Expresso</p>
              O tradicional café feito com água quente e
              grãos moídos
            </StyledTextDescription>

            <StyledFormAddToCart>
              R$ <p>9,90</p>

              <div>
                <button onClick={() => handleRemoveQtd()}>
                  <Minus size={15} />
                </button>
                <p>{qtdAddCart}</p>
                <button onClick={() => handleAddQtd()}>
                  <Plus size={15} />
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
              <p>Expresso</p>
              O tradicional café feito com água quente e
              grãos moídos
            </StyledTextDescription>

            <StyledFormAddToCart>
              R$ <p>9,90</p>

              <div>
                <button>
                  <Minus size={15} />
                </button>
                <p>0</p>
                <button>
                  <Plus size={15} />
                </button>
              </div>

              <ButtonShoppingCart>
                <img src={cart} alt="" />
              </ButtonShoppingCart>
            </StyledFormAddToCart>
          </StyledStore>
        </article>
      </AlignItemCenter>
    </StyledGlobalStore>
  );
}
