import logo from './logo.svg';
import './App.css';
import ResetPassword from './pages/resetPassword/ResetPassword';
import SigninSignup from './pages/signinSignup/SigninSignup';
import RouterDom from './pages/router/Router';
import Footer from 'rc-table/lib/Footer';
import FooterCopyrights from './components/footer/Footer';
import BookHeader from './components/header/Header';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
  return (
    <div>
        {/* <ResetPassword/> */}
        {/* <SigninSignup/> */}
        {/* <RouterDom/> */}
        {/* <FooterCopyrights/> */}
        <BookHeader/>
        {/* <Dashboard/> */}
    </div>
  );
}

export default App;
