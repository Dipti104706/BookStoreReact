import logo from './logo.svg';
import './App.css';
import RouterDom from './pages/router/Router';
import PleaseLogin from './components/pleaseLogin/PleaseLogin';
import HeaderForLogin from './components/headerforLogin/HeaderForLogin';
import OrderPlaced from './components/orderplaced/OrderPlaced';
import BookDescription from './components/bookdescription/BookDescription';
import Cart from './components/cart/Cart';
import Address from './components/address/Address';
import OrderSummery from './components/ordersummery/OrderSummery';

function App() {
  return (
    <div>
      {/* <OrderSummery/> */}
        {/* <BookDescription/> */}
        <RouterDom/>
        {/* <OrderPlaced/>    */}
    </div>
  );
}

export default App;
