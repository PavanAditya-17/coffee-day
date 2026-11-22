import { shop } from '../data/shop.js'
import SafeImage from './SafeImage.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-tagline">{shop.tagline} · {shop.location}</p>
          <h1 id="hero-title">A little coffee. A lot of refreshment.</h1>
          <p className="lead">
            Drop in at our {shop.location} café for fresh coffee, hot pizza,
            juicy burgers and cold shakes. Bring a friend, stay a while.
          </p>
          <div className="btn-row">
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href="#contact" className="btn btn-outline">Contact Us</a>
          </div>
        </div>

        <div className="hero-media">
          <SafeImage
            className="hero-img"
            src={shop.heroImage}
            alt={shop.heroImageAlt}
            label="☕"
            eager
          />
          <p className="hero-badge">Open daily<br /><strong>9 AM – 9 PM</strong></p>
        </div>
      </div>
    </section>
  )
}
