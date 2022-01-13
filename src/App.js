import logo from './logo.svg';
import './App.css';
import RouterDom from './pages/router/Router';
import PleaseLogin from './components/pleaseLogin/PleaseLogin';
import HeaderForLogin from './components/headerforLogin/HeaderForLogin';
import OrderPlaced from './components/orderplaced/OrderPlaced';

function App() {
  return (
    <div>
        {/* <RouterDom/> */}
        <OrderPlaced/>
        {/* <PleaseLogin/> */}
        {/* <HeaderForLogin/> */}
    </div>
  );
}

export default App;
