import React, { useState } from 'react';
import './Orders.css';

const OrdersManagement = () => {
    const [orders, setOrders] = useState([
        { id: 1, orderId: 'ORD001', customerName: 'Pritish Sen', orderDate: '2024-03-11', status: 'Pending' },
        { id: 2, orderId: 'ORD002', customerName: 'Apurv Anand', orderDate: '2023-03-12', status: 'Shipped' },
    ]);

    const handleDeleteOrder = (id) => {
        setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    };

    const handleUpdateStatus = (id, newStatus) => {
        setOrders(prevOrders =>
            prevOrders.map(order => 
                order.id === id ? { ...order, status: newStatus } : order
            )
        );
    };

    return (
        <div className="orders-container">
            <h2>Orders Management</h2>
            <div>
                <h3>List of Orders</h3>
                {orders.map(order => (
                    <div className="order-item" key={order.id}>
                        <p>Order ID: {order.orderId}</p>
                        <p>Customer Name: {order.customerName}</p>
                        <p>Order Date: {order.orderDate}</p>
                        <p>Status: {order.status}</p>
                        <div className="action-buttons">
                            <button onClick={() => handleUpdateStatus(order.id, 'Shipped')}>
                                Update Status
                            </button>
                            <button onClick={() => handleDeleteOrder(order.id)}>
                                Delete Order
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersManagement;


