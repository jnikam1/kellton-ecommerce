import {Routes,Route,Redirect} from 'react-router-dom'
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
