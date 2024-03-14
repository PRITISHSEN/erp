import React from 'react';
import { Link } from 'react-router-dom';
import { FaBox, FaClipboardList } from 'react-icons/fa'; 
import './Dashboard.css'; 

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-heading">Dashboard</h2>
            <div className="metrics-container">
                <div className="metric-card">
                    <div className="metric-icon"><FaBox /></div>
                    <div className="metric-info">
                        <p className="metric-label">Total Products</p>
                        <p className="metric-value">4</p>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-icon"><FaClipboardList /></div>
                    <div className="metric-info">
                        <p className="metric-label">Total Orders</p>
                        <p className="metric-value">2</p>
                    </div>
                </div>
            </div>
            <div className="cta-buttons">
                <Link to="/products" className="cta-button">Manage Products</Link>
                <Link to="/orders" className="cta-button">View Orders</Link>
            </div>
        </div>
    );
};

export default Dashboard;

