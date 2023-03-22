import React, {useContext} from 'react';

import classes from './Store.module.css';
import MusicAlbums from '../music albums/MusicAlbums';
import Cart from '../cart/Cart';
import showCartContext from '../store/showCart-context';


const Store = (props) => {

  const showCartCtx = useContext(showCartContext);


  return (
    <section className={classes.section}>
      <h1>The Generics</h1>
      <MusicAlbums productList={props.productList} />
      {showCartCtx.cartState && <Cart onClick={showCartCtx.hideCart}/>}
      <button className={classes.button} onClick={showCartCtx.showCart}>See the cart</button>
    </section>
  );
};

export default Store;
