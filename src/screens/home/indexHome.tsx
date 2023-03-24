import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import BannerCoffe from '../../../imgs/banner-coffe.svg'
import { GlobalIcons, StyleBanner, StyledSubText, StyleTitle, } from './styledHome'


export function Home() {
    return (
        <StyleBanner>
            <div>
                <StyleTitle>Encontre o café perfeito para qualquer hora do dia</StyleTitle>
                <StyledSubText>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</StyledSubText>

                <GlobalIcons>
                    <div>
                        <ShoppingCart size={24}/>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <Package size={24}/>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <Timer size={24}/>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                    <div>
                        <Coffee size={24}/>
                        <p>Embalagem mantém o café intacto</p>
                    </div>
                </GlobalIcons>
            </div>

            <img src={BannerCoffe} alt="" />
        </StyleBanner>
    )
}