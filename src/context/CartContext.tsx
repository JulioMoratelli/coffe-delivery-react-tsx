/* eslint-disable prefer-const */
import { createContext, ReactNode, useState } from "react";
import { CoffeeProps } from "../screens/home/loja/indexStore";

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: CoffeeProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: number;
}

export interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}


interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData)

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([])
  const [total, setTotal] = useState(0)

  function addItemCart(newItem: CoffeeProps) {
    const indexItem = cart.findIndex(item => item.id === newItem.id);

    if (indexItem !== -1) {
      const updatedCart = cart.map(item => {
        if (item.id === newItem.id) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price
          };
        }
        return item;
      });

      setCart(updatedCart);
      totalResultCart(updatedCart);
      return;
    }

    const data: CartProps = {
      id: newItem.id,
      title: newItem.nome,
      description: newItem.descricao,
      price: newItem.valor,
      cover: newItem.imagem,
      amount: 1,
      total: newItem.valor
    };

    setCart(prevCart => [...prevCart, data]);
    totalResultCart([...cart, data]);
  }

  function removeItemCart(product: CartProps) {
    const updatedCart = cart.map(item => {
      if (item.id === product.id && item.amount > 1) {
        return {
          ...item,
          amount: item.amount - 1,
          total: (item.amount - 1) * item.price
        };
      }
      return item;
    });

    const removeItem = updatedCart.filter(item => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  }

  function totalResultCart(items: CartProps[]) {
    let myCart = items;
    let result = myCart.reduce((acc, obj) => { return acc + obj.total }, 0)
    // const resultFormated = result.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    setTotal(+result);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;