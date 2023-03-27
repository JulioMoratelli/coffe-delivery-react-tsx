import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import BannerCoffe from '../../../../imgs/banner-coffe.svg'
import { Store } from '../loja/indexStore'
import { GlobalIcons, StyleBanner, StyledIconCoffe, StyledIconPackag, StyledIconShopping, StyledIconTimer, StyledSubText, StyleTitle, } from './styledHome'


export function Home() {
    return (
        <StyleBanner>
            <div>
                <StyleTitle>Encontre o café perfeito para qualquer hora do dia</StyleTitle>
                <StyledSubText>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</StyledSubText>

                <GlobalIcons>
                    <StyledIconShopping>
                        <ShoppingCart size={24}/>
                        <p>Compra simples e segura</p>
                    </StyledIconShopping>
                    <StyledIconPackag>
                        <Package size={24}/>
                        <p>Embalagem mantém o café intacto</p>
                    </StyledIconPackag>
                    <StyledIconTimer>
                        <Timer size={24}/>
                        <p>Entrega rápida e rastreada</p>
                    </StyledIconTimer>
                    <StyledIconCoffe>
                        <Coffee size={24}/>
                        <p>O café chega fresquinho até você...</p>
                    </StyledIconCoffe>
                </GlobalIcons>
            </div>

            <img src={BannerCoffe} alt="" />

            <Store />
        </StyleBanner>
    )
}