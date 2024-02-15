import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import coffes from "../../../../imgs/coffes.svg";
import cart from "../../../../imgs/cart.svg";
import { StyledFormAddToCart, StyledImgCoffe, StyledTextDescription, StyledStore, StyledGlobalStore, ButtonShoppingCart, AlignItemCenter } from "./styledStore";
import { useEffect, useState } from "react";

const coffee = [
  {
    id: 1,
    tipo: 'Forte',
    nome: 'Espresso Intenso',
    descricao: 'Um café encorpado e intenso, com sabor marcante e aroma irresistível.',
    valor: 5.99,
    imagem: "../../../../imgs/image.png"
  },
  {
    id: 2,
    tipo: 'Tradicional',
    nome: 'Café Brasileiro',
    descricao: 'Um café suave e tradicional, perfeito para começar o dia com energia.',
    valor: 4.49,
    imagem: "../../../../imgs/image-brasileiro.png"
  },
  {
    id: 3,
    tipo: 'Forte',
    nome: 'Café Italiano',
    descricao: 'Um café forte e encorpado, com um toque de amargor característico da tradição italiana.',
    valor: 6.99,
    imagem: "../../../../imgs/imageforte-italiano.png"
  },
  {
    id: 4,
    tipo: 'Fraco',
    nome: 'Café Descafeinado',
    descricao: 'Um café suave e leve, sem cafeína, ideal para quem deseja evitar estimulantes.',
    valor: 4.99,
    imagem: "../../../../imgs/image-descafeinado.png"
  },
  {
    id: 5,
    tipo: 'Exótico',
    nome: 'Café Bali Blue',
    descricao: 'Um café exótico com notas florais e frutadas, cultivado nas montanhas de Bali.',
    valor: 8.79,
    imagem: "../../../../imgs/imagebali-blue.png"
  },
  {
    id: 6,
    tipo: 'Gourmet',
    nome: 'Café Arabica Premium',
    descricao: 'Um café gourmet de alta qualidade, cultivado em altitudes elevadas e com torra especial.',
    valor: 9.99,
    imagem: "../../../../imgs/imagearabe-premium.png"
  }
];

export interface CoffeeProps {
  id: number,
  tipo: string,
  nome: string,
  descricao: string,
  valor: number,
  imagen: string
}


export function Store() {
  const [coffees, setCoffees] = useState(coffee.map(item => ({ ...item, quantidade: 0 })));
  //const [qtdAddCart, setQtdAddCart] = useState(0)


  function handleRemoveQtd(coffee: number) {
    setCoffees(qtdCoffees => qtdCoffees.map(item => {
      if (item.id === coffee && item.quantidade > 0) {
        return { ...item, quantidade: item.quantidade - 1 }
      }
      return item;
    }))

  }


  function handleAddQtd(coffee: number) {
    setCoffees(qtdCoffees => qtdCoffees.map(item => {
      if (item.id === coffee) {
        return { ...item, quantidade: item.quantidade + 1 }
      }
      return item;
    }))

  }


  return (
    <StyledGlobalStore>
      <AlignItemCenter>
        <p>Nossos Cafés</p>
        <article>
          {coffees.map((item) => (
            <StyledStore key={item.id}>
              <StyledImgCoffe>
                <img src={item.imagem} alt="" />
                <p>{item.tipo}</p>
              </StyledImgCoffe>

              <StyledTextDescription>
                <p>{item.nome}</p>
                {item.descricao}
              </StyledTextDescription>
              <StyledFormAddToCart>
                R$ <p>{item.valor}</p>

                <div>
                  <button onClick={() => handleRemoveQtd(item.id)}>
                    <Minus size={15} />
                  </button>
                  <p>{item.quantidade}</p>
                  <button onClick={() => handleAddQtd(item.id)}>
                    <Plus size={15} />
                  </button>
                </div>

                <ButtonShoppingCart>
                  <img src={cart} alt="" />
                </ButtonShoppingCart>
              </StyledFormAddToCart>
            </StyledStore>

          ))}
        </article>
      </AlignItemCenter>
    </StyledGlobalStore>
  );
}
