import { Package } from '@phosphor-icons/react'
import BannerCoffe from '../../../imgs/banner-coffe.svg'
import { StyleBanner, StyledSubText, StyleTitle, } from './styledHome'


export function Home() {
    return (
        <StyleBanner>
            <div>
                <StyleTitle>Encontre o café perfeito para qualquer hora do dia</StyleTitle>
                <StyledSubText>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</StyledSubText>

                <div>
                    <Package size={24}/>
                    Embalagem mantém o café intacto
                </div>
                <div>
                    <Package size={24}/>
                    Embalagem mantém o café intacto
                </div>
                <div>
                    <Package size={24}/>
                    Embalagem mantém o café intacto
                </div>
                <div>
                    <Package size={24}/>
                    Embalagem mantém o café intacto
                </div>
            </div>

            <img src={BannerCoffe} alt="" />
        </StyleBanner>
    )
}