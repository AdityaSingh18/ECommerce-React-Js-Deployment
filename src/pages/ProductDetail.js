import React, { useContext } from 'react';

import classes from './ProductDetail.module.css';
import productContext from '../store/product-context';

const ProductDetail = () => {
  const productCtx = useContext(productContext);

  //   console.log('productDetail');

  return (
    <div className={classes.product}>
      <img src={productCtx.imageUrl} alt={productCtx.title} />
      <div className={classes.detail}>
        <h3>{productCtx.title}</h3>
        <h2>${productCtx.price.toFixed(2)}</h2>
        <span className={classes.rating}>Rating <span>{productCtx.rating}&#9733;</span></span>
        <p>{productCtx.detail}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
