import React, { useState } from 'react';
import './Products.css'; 

const Products = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stock: 100 },
        { id: 2, name: 'Product 2', category: 'Category B', price: 19.99, stock: 50 },
        { id: 3, name: 'Product 3', category: 'Category C', price: 29.99, stock: 25 },
        { id: 4, name: 'Product 4', category: 'Category D', price: 39.99, stock: 1 },
    ]);
    const [editProductId, setEditProductId] = useState(null);
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        category: '',
        price: 0,
        stock: 0
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSaveProduct = () => {
        if (editProductId) {
            const updatedProducts = products.map(product =>
                product.id === editProductId ? { ...product, ...formData } : product
            );
            setProducts(updatedProducts);
            setEditProductId(null); 
        } else {
            const newProduct = {
                id: products.length + 1,
                ...formData
            };
            setProducts([...products, newProduct]);
        }
        setFormData({
            id: null,
            name: '',
            category: '',
            price: 0,
            stock: 0
        });
    };
    const handleEditProduct = (id) => {
        const productToEdit = products.find(product => product.id === id);
        setFormData(productToEdit);
        setEditProductId(id); // Set the id of the product being edited
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <div className="products-container">
            <h2>Products Management</h2>
            <div className="form-container">
                <h3>Add/Edit Product</h3>
                <form>
                    <input type="hidden" name="id" value={formData.id} />
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    <label>Category:</label>
                    <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                    <label>Price:</label>
                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
                    <label>Stock:</label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} />
                    <button type="button" onClick={handleSaveProduct}>Save</button>
                </form>
            </div>
            <div className="products-list">
                <h3>List of Products</h3>
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <p><strong>Name:</strong> {product.name}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <div className="action-buttons">
                            <button onClick={() => handleEditProduct(product.id)}>Edit</button>
                            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
