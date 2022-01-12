import logo from './logo.svg';
import './App.css';
import RouterDom from './pages/router/Router';
import PleaseLogin from './components/pleaseLogin/PleaseLogin';
import HeaderForLogin from './components/headerforLogin/HeaderForLogin';

function App() {
  return (
    <div>
        {/* <RouterDom/> */}
        {/* <PleaseLogin/> */}
        <HeaderForLogin/>
    </div>
  );
}

export default App;
