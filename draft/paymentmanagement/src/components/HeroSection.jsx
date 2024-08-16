import React from 'react';
import '../css/Hero.css';

const Hero = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Find the right restaurant POS software to power your restaurant</h1>
        <p>Everything you need to run your restaurant easily -- all in one platform.</p>
      </div>

      <div className="cards">
        <div className="card">
          <img src="https://via.placeholder.com/305x305" alt="Payment Processing" />
          <h2>Payment Processing</h2>
          <p>
            Accept various payment methods including cash, credit cards, mobile payments, and digital wallets.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/580x514" alt="Order Management" />
          <h2>Order Management</h2>
          <p>
            Efficiently create, modify, and cancel orders for dine-in, takeout, and delivery.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/460x239" alt="Menu Management" />
          <h2>Menu Management</h2>
          <p>
            Efficiently create, manage, and update your menu items, categories, and pricing.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/374x212" alt="POS Hardware" />
          <h2>POS Hardware</h2>
          <p>
            A touchscreen device for order entry, payment processing, and customer interaction.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/580x514" alt="Reporting and Analytics" />
          <h2>Reporting and Analytics</h2>
          <p>
            Gain valuable insights into your business performance.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div className="card">
          <img src="https://via.placeholder.com/580x514" alt="Customer Support" />
          <h2>Customer Support</h2>
          <p>
            Provide comprehensive support channels (phone, email, live chat) for troubleshooting and assistance.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Hero