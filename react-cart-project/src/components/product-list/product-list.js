import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/product';
import './product-list.css';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>Premium Sofa Sets from Italy</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;