import { Switch, Route} from 'react-router-dom'
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
          
        
        <Route path="/shop" component={ShopPage}/>
         
        <Route path="/checkout" component={CheckoutPage}/>
          
        <Route path="/auth" component={AuthPage}/>
          
      </Switch>
    </div>
  );
}

export default App;
