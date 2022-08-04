import { Switch, Route} from 'react-router-dom'
import Header from './component/header/header.component';
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import './App.css'
import Contact from './pages/contact/contact.component';
import Collections from './pages/collections/collections.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>

        <Route exact path="/" component={HomePage}/>
          
        <Route exact path="/shop" component={ShopPage}/>
         
        <Route path="/checkout" component={CheckoutPage}/>
          
        <Route path="/auth" component={AuthPage}/>

        <Route path="/contact" component={Contact} />

        <Route path="/shop/:collectionName" component={Collections} />

      </Switch>
    </div>
  );
}

export default App;
