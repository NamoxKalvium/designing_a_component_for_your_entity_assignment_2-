// components/productcard.jsx
import React from 'react';
import ViewProductButton from './button';

const ProductCard = () => {
    // Static product details
    const productImage = 'src/assets/image.jpg';
    const productName = "Sample Product";
    const productPrice = "$19.99";

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '16px',
            width: '200px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <img src={productImage} alt={productName} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ margin: '16px 0 8px' }}>{productName}</h3>
            <p style={{ fontSize: '18px', color: '#333', margin: '8px 0' }}>{productPrice}</p>
            <ViewProductButton />
        </div>
    );
};

export default ProductCard;