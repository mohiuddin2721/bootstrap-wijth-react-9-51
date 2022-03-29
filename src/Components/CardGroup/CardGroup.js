import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name: 'Laptop Pro', price: 135000},
        {id: 2, name: 'Laptop Grow', price: 125000},
        {id: 3, name: 'Laptop Trow', price: 115000},
    ]
    return (
        <div>
            <h1>This is my Card group.</h1>
            <div className="card-group">
                {
                    products.map(product => <Card 
                        key={product.id} 
                        product={product}
                        ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;