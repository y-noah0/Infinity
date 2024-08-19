import React from 'react'

export default function Home() {
  return (
  <>
  
     <header>
        <div className="navbar">
            <img src="./img/INFINITY  TECH POS 2.png" alt="" className="logo"/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <a href="./components/Register/Register.jsx" className="btn-register">Register</a>
        </div>
    </header>
    <main>
        <section className="hero-section">
            <div className="hero-content">
                <h1>Server better with one faster, flexible platform</h1>
                <p>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</p>
                <div className="hero-buttons">
                    <a href="#" className="btn-demo">Get a Demo</a>
                    <a href="#" className="btn-started">Get Started</a>
                </div>
            </div>
            <div className="hero-image">
                <img src="" alt="Device Mockup"/>
            </div>
        </section>
    </main>
    {/* features */}
    <section className="pos-landing-section">
        <div className="top-banner">
            <div className="top-left">
                <h2>20K + Restaurants, Coffee shops, Alimentation, & more use infinity POS</h2>
            </div>
            <div className="top-right">
                <div className="stat">
                    <p className="stat-number">103 +</p>
                    <p className="stat-label">Active User</p>
                </div>
                <div className="stat">
                    <p className="stat-number">4.8</p>
                    <p className="stat-label">Reviews</p>
                </div>
                <div className="stat">
                    <p className="stat-number">4.8</p>
                    <p className="stat-label">Reviews</p>
                </div>
            </div>
        </div>

      
        <div className="bottom-banner">
            <h2 className="main-heading">
                <span className="white-text">The restaurant and retail <br/> point of sale at </span>
                <span className="green-text">our service.</span>
            </h2>
            <div className="features">
                <div className="feature-card">
                    <div className="icon-bg"><img src="./img/accessiable.png" alt="Accessible" /></div>
                    <h3>Accesible from any where</h3>
                    <p>Access our cloud-based system in or out of the restaurant.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-bg"><img src="https://via.placeholder.com/48x55" alt="Offline Mode" /></div>
                    <h3>Offline Mode</h3>
                    <p>Reliable offline mode ensures you’re always on.</p>
                </div>
                <div className="feature-card">
                    <div className="icon-bg"><img src="https://via.placeholder.com/48x55" alt="Support" /></div>
                    <h3>24/7 Support</h3>
                    <p>Connect with real people who really get it, 24/7</p>
                </div>
                <div className="feature-card">
                    <div class="icon-bg"><img src="https://via.placeholder.com/46x53" alt="Integration" /></div>
                    <h3>Website and App Integration</h3>
                    <p>100+ integrations sync directly with our POS.</p>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

