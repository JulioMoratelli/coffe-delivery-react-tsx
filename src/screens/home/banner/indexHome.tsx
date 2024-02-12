import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import BannerCoffe from '../../../../imgs/banner-coffe.svg'
import { Store } from '../loja/indexStore'
import { AlignItemsCenter, GlobalIcons, StyledBanner, StyledIconCoffe, StyledIconPackag, StyledIconShopping, StyledIconTimer, StyledSubText, StyledTitle, } from './styledHome'


export function Home() {
  return (
    <AlignItemsCenter>
      <StyledBanner>
        <div>
          <StyledTitle>Encontre o café perfeito para qualquer hora do dia</StyledTitle>
          <StyledSubText>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</StyledSubText>

          <GlobalIcons>
            <StyledIconShopping>
              <ShoppingCart size={24} />
              <p>Compra simples e segura</p>
            </StyledIconShopping>
            <StyledIconPackag>
              <Package size={24} />
              <p>Embalagem mantém o café intacto</p>
            </StyledIconPackag>
            <StyledIconTimer>
              <Timer size={24} />
              <p>Entrega rápida e rastreada</p>
            </StyledIconTimer>
            <StyledIconCoffe>
              <Coffee size={24} />
              <p>O café chega fresquinho até você...</p>
            </StyledIconCoffe>
          </GlobalIcons>
        </div>

        <img src={BannerCoffe} alt="" />
      </StyledBanner>
      <Store />
    </AlignItemsCenter>
  )
}