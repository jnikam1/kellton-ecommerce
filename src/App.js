import { Switch, Route} from 'react-router-dom'
import Header from './component/header/header.component';
import AuthPage from './pages/auth/auth.component';
import CheckoutPage from './pages/checkout/checkout.component';
import HomePage from './pages/home/home.component';
import ShopPage from './pages/shop/shop.component';
import './App.css'
import Contact from './pages/contact/contact.component';
import Collections from './pages/collections/collections.component';
import Success from './component/success/success.component';
import SuccessSignIn from './component/sign-in-success/sign-in-success.component';
import SuccessContact from './component/success-contact/success-contact.component';


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

        <Route path="/success" component={Success} />

        <Route path="/success-sign-in" component={SuccessSignIn} />

        <Route path="/success-contact" component={SuccessContact} />

      </Switch>
    </div>
  );
}

export default App;
