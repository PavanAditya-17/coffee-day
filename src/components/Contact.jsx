import { shop } from '../data/shop.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head">
          <h2 id="contact-title">Visit or call us</h2>
        </div>
        <dl className="contact-grid">
          <div className="contact-item">
            <dt>Location</dt>
            <dd>{shop.location}</dd>
          </div>
          <div className="contact-item">
            <dt>Opening hours</dt>
            <dd>{shop.hours}</dd>
          </div>
          <div className="contact-item">
            <dt>Phone</dt>
            <dd><a href={shop.phoneLink}>{shop.phoneDisplay}</a></dd>
          </div>
        </dl>
        <div className="btn-row">
          <a className="btn btn-primary" href={shop.directionsUrl} target="_blank" rel="noopener noreferrer">
            Get Directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
          </a>
          <a className="btn btn-outline" href={shop.phoneLink}>Call Coffee Day</a>
        </div>
      </div>
    </section>
  )
}
