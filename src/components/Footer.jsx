import { shop } from '../data/shop.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="footer-name">{shop.name}</p>
        <p>{shop.tagline}</p>
        <p>{shop.location} · {shop.hours}</p>
        <p className="copy">© {new Date().getFullYear()} {shop.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
