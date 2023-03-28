import { ShoppingCart } from '@phosphor-icons/react'
import coffes from '../../../../imgs/coffes.svg'
import { SylesStore } from './styledStore'

export function Store() {
    return(
        <div>
            <p>Nossos Cafés</p>

            <SylesStore>
                <img src={coffes} alt="" />
                <p>Tradicional</p>

                <div>
                    <p>Expresso Tradicional</p>
                    O tradicional café feito com água quente e grãos moídos
                </div>

                <div>
                    <p>R$ 9,90</p>
                    <input type="number" name="" id="" />
                    <button><ShoppingCart size={24}/></button>
                </div>
            </SylesStore>
        </div>
    )
}