import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './global/default/indexDefault'
import { Checkout } from './screens/checkout/indexCheckout'
import { Home } from './screens/home/banner/indexHome'
import { Success } from './screens/success/indexSuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
