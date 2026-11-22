import { useState } from 'react'
import { categories, menuItems } from '../data/menu.js'
import SafeImage from './SafeImage.jsx'

const rupees = (n) => `₹${n.toLocaleString('en-IN')}`
const icons = { Coffee: '☕', Pizza: '🍕', Burgers: '🍔', Shakes: '🥤' }

export default function Menu() {
  const [active, setActive] = useState(categories[0])
  const items = menuItems.filter((i) => i.category === active)

  return (
    <section id="menu" className="section menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-head">
          <h2 id="menu-title">Our menu</h2>
          <p>Pick a category to see what’s on offer. Prices are in Indian rupees.</p>
        </div>

        <div className="filters" role="group" aria-label="Menu categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`filter ${c === active ? 'is-active' : ''}`}
              aria-pressed={c === active}
              onClick={() => setActive(c)}
            >
              <span aria-hidden="true">{icons[c]}</span> {c}
            </button>
          ))}
        </div>

        <ul className="menu-grid" aria-label={`${active} menu`}>
          {items.map((item) => (
            <li key={item.id} className="card">
              <SafeImage
                className="card-img"
                src={item.image}
                alt={item.imageAlt}
                label={icons[item.category]}
              />
              <div className="card-body">
                <div className="card-top">
                  <h3>{item.name}</h3>
                  <p className="price">{rupees(item.price)}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
