// components/button.jsx
import React from 'react';

const ViewProductButton = () => {
    return (
        <button style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>
            View Product
        </button>
    );
};

export default ViewProductButton;