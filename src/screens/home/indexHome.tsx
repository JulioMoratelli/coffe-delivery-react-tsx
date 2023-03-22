import { Package } from '@phosphor-icons/react'
import BannerCoffe from '../../../imgs/banner-coffe.svg'
import { StyleBanner } from './styledHome'


export function Home() {
    return (
        <StyleBanner>
            <div>
                <p>Encontre o café perfeito para qualquer hora do dia</p>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

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