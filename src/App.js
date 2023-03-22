import React, { Suspense, useContext ,lazy} from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Home from './pages/Home';

import Footer from './footer/Footer';
import ProductDetail from './pages/ProductDetail';
import { ShowCartContextProvider } from './store/showCart-context';
import { ProductContextProvider } from './store/product-context';
import loginContext from './store/login-context';

const Store = lazy(()=>import('./pages/Store'))
const About = lazy(()=>import('./pages/About'))
const Login = lazy(()=>import('./pages/Login'))
const ContactUs = lazy(()=>import('./pages/ContactUs'))

function App() {
  const loginCtx = useContext(loginContext);

  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'products/Album-1.png',
    },

    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'products/Album-2.png',
    },

    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    },
  ];

  return (
    <React.Fragment>
      <ShowCartContextProvider>
        <Header />
      </ShowCartContextProvider>

      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>

      <Route path='/home'>
        <Home />
      </Route>
<Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <ProductContextProvider>
          <ShowCartContextProvider>
            <Route path='/product' exact>
              {loginCtx.isloggedIn && <Store productList={productsArr} />}
              {!loginCtx.isloggedIn && <Redirect to='/login' />}
            </Route>
          </ShowCartContextProvider>

          <Route path='/product/:productId'>
            <ProductDetail />
          </Route>
        </ProductContextProvider>
      </Switch>

      <Route path='/about'>
        <About />
      </Route>

      <Route path='/contact'>
        <ContactUs />
      </Route>

      <Route path='/login'>
        {!loginCtx.isloggedIn && <Login />}
        {loginCtx.isloggedIn && <Redirect to='/home' />}
      </Route>
      </Suspense>
      {/* <Route path='*'>
        <Redirect to='home'/>
      </Route> */}

      <Footer />
    </React.Fragment>
  );
}

export default App;
