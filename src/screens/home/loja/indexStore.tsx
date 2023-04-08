import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import cart from "../../../../imgs/cart.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore, StyledGlobalStore, ButtonShoppingCart } from "./styledStore";

const produtos = [
  {
    id: 1,
    informations: {
      avatarUrl: 'https://cdn.loopvet.com.br/558_1664903380809_Ds7jYHGR.jpg',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos'
    },   
    purchase: [
      {id:1, value: 'value'},
      {id:2, quantit: 'quantit'},
    ],
    publishedAt: new Date ('2022-11-30 22:12:00')
  },
  {
    id: 2,
    informations: {
      avatarUrl: 'https://pps.whatsapp.net/v/t61.24694-24/288942517_421356083224184_861251068959716955_n.jpg?ccb=11-4&oh=01_AdTRxkDtSt4rlXVA9MgwVz0ei-fTfFeAO7i7ybimnyWNSg&oe=63D82B66',
      name: 'Latte',
      role: 'Uma dose de café expresso com o dobro de leite e espuma cremosa'
    },   
    purchase: [
      {id:1, value: 'value'},
      {id:2, quantit: 'quantit'},
    ],
    publishedAt: new Date ('2022-12-01 12:21:00')
  }
]

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
          <p>{produtos[0].informations.name}</p>
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
          <p>{produtos[1].informations.name}</p>
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
