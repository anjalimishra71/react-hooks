import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      {product.name} - ${product.price}
    </li>
  );
};

export default ProductItem;