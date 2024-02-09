import { NavLink } from 'react-router-dom'
import LogoCoffe from '../../../imgs/logo-coffe.svg'
import { ShoppingCart, MapPin } from '@phosphor-icons/react'
import { LayoutContainer, NavBar, StyleCheckout, StyleLocation } from './stylesHeader'

export function Header() {
    return (
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
                    </StyleCheckout>
                </NavLink>
            </NavBar>
        </LayoutContainer>
    )
}