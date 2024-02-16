import { NavLink } from 'react-router-dom'
import LogoCoffe from '../../../imgs/logo-coffe.svg'
import { ShoppingCart, MapPin, UserCircle } from '@phosphor-icons/react'
import { IconLogin, LayoutContainer, NavBar, StyleCheckout, StyleLocation } from './stylesHeader'
import { useContext, useState } from 'react';
import { CartContext, CartProps } from '../../context/CartContext';

export function Header() {
  const [items, setItems] = useState<CartProps[]>([]);
  const { cartAmount } = useContext(CartContext)


  return (
    <div>
      <LayoutContainer>
        <NavLink to="/" title="Mercado">
          <img src={LogoCoffe} alt="" />
        </NavLink>
        <NavBar>
          <NavLink to="/success" title="Endereço"
            style={{
              textDecoration: 'none'
            }}
          >
            <StyleLocation>
              <MapPin size={24} />
              <p>Jau, SP</p>
            </StyleLocation>
          </NavLink>
          <NavLink to="/checkout" title="Finalize o seu pedido">
            <StyleCheckout>
              <ShoppingCart size={24} />
              <div>
                <span>{cartAmount}</span>
              </div>
            </StyleCheckout>
          </NavLink>
          <NavLink to="/login" title="Finalize o seu pedido">
            <IconLogin>
              <UserCircle size={30} />
            </IconLogin>
          </NavLink>
        </NavBar>
      </LayoutContainer>
    </div>
  )
}