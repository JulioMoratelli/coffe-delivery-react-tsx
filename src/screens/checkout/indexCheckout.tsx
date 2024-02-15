import coffes from "../../../imgs/coffes.svg";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";
import {
  StyledAllCheckout,
  DeliveryAddress,
  DivFormAddress,
  FormStyledInput,
  Payment,
  PaymentMethods,
  PaymentStatus,
  AllCoffesSelect,
  BagProducts,
  PurchaseInformation,
  ButtonDelet,
  AccountTotal,
  ConfirmOrder,
  TitlePayments,
  DeliveryAlignCenter,
} from "./styledCheckout";
import { CartContext, CartProps } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

export function Checkout() {
  const [items, setItems] = useState<CartProps[]>([]);
  const { cart, total, removeItemCart, addItemCart } = useContext(CartContext)


  useEffect(() => {
    setItems(cart);
  }, [cart])

  return (
    <DeliveryAlignCenter>
      <StyledAllCheckout>
        <DeliveryAddress>
          <p>Complete seu pedido</p>
          <DivFormAddress>
            <MapPinLine size={24} />
            <TitlePayments>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TitlePayments>
            <FormStyledInput action="">
              <input
                style={{ width: "270px" }}
                type="text"
                placeholder="Primeiro nome"
                required
              />
              <input
                style={{ width: "270px" }}
                type="text"
                placeholder="Sobrenome"
                required
              />
              <input
                style={{ width: "200px" }}
                type="number"
                placeholder="CEP"
                required
              />
              <input
                style={{ width: "260px" }}
                type="text"
                placeholder="Cidade"
                required
              />
              <input
                style={{ width: "60px" }}
                type="text"
                placeholder="UF"
                required
              />
              <input
                style={{ width: "555px" }}
                type="text"
                placeholder="Rua"
                required
              />
              <input
                style={{ width: "200px" }}
                type="number"
                placeholder="Número"
                required
              />
              <input
                style={{ width: "340px" }}
                type="text"
                placeholder="Bairro"
                required
              />
              <input
                style={{ width: "555px" }}
                type="text"
                placeholder="Complemento"
              />
            </FormStyledInput>
          </DivFormAddress>

          <Payment>
            <CurrencyDollar size={22} />

            <TitlePayments>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </TitlePayments>


            <PaymentMethods>
              <button>
                <CreditCard size={16} />
                cartão de crédito
              </button>
              <button>
                <Bank size={16} />
                cartão de débito
              </button>
              <button>
                <Money size={16} />
                dinheiro
              </button>
            </PaymentMethods>
          </Payment>
        </DeliveryAddress>

        <AllCoffesSelect>
          <div>
            <p>Cafés selecionados</p>
          </div>
          <PaymentStatus>
            <div>
              {items.map((item) => (
                <BagProducts key={item.id}>
                  <div>
                    <img src={item.cover} alt="" />
                    <PurchaseInformation>
                      <h3>{item.title}</h3>
                      <div>
                        <button>
                          <Minus size={16} />
                        </button>
                        <p>{item.amount}</p>
                        <button>
                          <Plus size={16} />
                        </button>
                      </div>
                      <ButtonDelet><Trash size={16} onClick={() => removeItemCart(item)} /><p>remover</p></ButtonDelet>
                    </PurchaseInformation>
                  </div>
                  <p>R$ {item.price}</p>
                </BagProducts>
              ))}

            </div>

            <AccountTotal>
              <div>
                <p>Total de items</p>
                <span>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
              </div>
              <div>
                <p>Entrega</p>
                <span>R$ 3,50</span>
              </div>
              <div>
                <h1>Total</h1>
                <h3>{(total + 3.5).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</h3>
              </div>
            </AccountTotal>

            <ConfirmOrder>confirmar pedido</ConfirmOrder>
          </PaymentStatus>
        </AllCoffesSelect>
      </StyledAllCheckout>
    </DeliveryAlignCenter>


  );
}
