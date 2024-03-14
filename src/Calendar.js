import React, { useState } from 'react';
import Calendar from 'react-calendar';

const OrdersCalendar = ({ orders }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const ordersForSelectedDate = orders.filter(order => {
        const orderDate = new Date(order.expectedDeliveryDate);
        return orderDate.toDateString() === selectedDate.toDateString();
    });

    return (
        <div>
            <h2>Orders Calendar View</h2>
            <Calendar onChange={handleDateChange} value={selectedDate} />
            <div>
                <h3>Orders for {selectedDate.toDateString()}</h3>
                <ul>
                    {ordersForSelectedDate.map(order => (
                        <li key={order.id}>{order.orderId} - {order.customerName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrdersCalendar;
