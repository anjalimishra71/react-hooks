import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';

const products = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
    { id: 2, name: 'Shirt', category: 'clothing', price: 30 },
    { id: 3, name: 'Phone', category: 'electronics', price: 700 },
    { id: 4, name: 'Jeans', category: 'clothing', price: 50 },
];

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const category = searchParams.get('category');
        const sort = searchParams.get('sort');

        let filtered = [...products];
        console.log(filtered);


        // Apply category filter
        if (category) {
            filtered = filtered.filter((product) => product.category === category);
        }

        // Apply sorting
        if (sort === 'price_asc') {
            filtered = filtered.sort((a, b) => a.price - b.price);
        } else if (sort === 'price_desc') {
            filtered = filtered.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(filtered);
    }, [searchParams]); // Re-run the effect whenever searchParams change

    return (
        <div>
            <h1>Product List</h1>
            {filteredProducts.length === 0 ? (
                <p>No products found matching your filters.</p>
            ) : (
                <ul>
                    {filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;