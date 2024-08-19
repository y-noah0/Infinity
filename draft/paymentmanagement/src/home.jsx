import React from 'react'

export default function Home() {
  return (
  <>
  
     <header>
        <div class="navbar">
            <img src="./img/INFINITY  TECH POS 2.png" alt="" class="logo"/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <a href="#" class="btn-register">Register</a>
        </div>
    </header>
    <main>
        <section class="hero-section">
            <div class="hero-content">
                <h1>Server better with one faster, flexible platform</h1>
                <p>Our POS system software is designed to cater to various industries, including bars, restaurants, coffee shops, pizzerias, alimentation, salons, and more.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn-demo">Get a Demo</a>
                    <a href="#" class="btn-started">Get Started</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="" alt="Device Mockup"/>
            </div>
        </section>
    </main>
    {/* features */}
    <section class="pos-landing-section">
        <div class="top-banner">
            <div class="top-left">
                <h2>20K + Restaurants, Coffee shops, Alimentation, & more use infinity POS</h2>
            </div>
            <div class="top-right">
                <div class="stat">
                    <p class="stat-number">103 +</p>
                    <p class="stat-label">Active User</p>
                </div>
                <div class="stat">
                    <p class="stat-number">4.8</p>
                    <p class="stat-label">Reviews</p>
                </div>
                <div class="stat">
                    <p class="stat-number">4.8</p>
                    <p class="stat-label">Reviews</p>
                </div>
            </div>
        </div>

      
        <div class="bottom-banner">
            <h2 class="main-heading">
                <span class="white-text">The restaurant and retail <br/> point of sale at </span>
                <span class="green-text">our service.</span>
            </h2>
            <div class="features">
                <div class="feature-card">
                    <div class="icon-bg"><img src="./img/accessiable.png" alt="Accessible" /></div>
                    <h3>Accesible from any where</h3>
                    <p>Access our cloud-based system in or out of the restaurant.</p>
                </div>
                <div class="feature-card">
                    <div class="icon-bg"><img src="https://via.placeholder.com/48x55" alt="Offline Mode" /></div>
                    <h3>Offline Mode</h3>
                    <p>Reliable offline mode ensures you’re always on.</p>
                </div>
                <div class="feature-card">
                    <div class="icon-bg"><img src="https://via.placeholder.com/48x55" alt="Support" /></div>
                    <h3>24/7 Support</h3>
                    <p>Connect with real people who really get it, 24/7</p>
                </div>
                <div class="feature-card">
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

