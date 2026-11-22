import { shop } from '../data/shop.js'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container about-inner">
        <h2 id="about-title">About Coffee Day</h2>
        <p>
          Coffee Day is a relaxed café in {shop.location}. It’s a place for a good
          cup of coffee, a tasty snack and an easy catch-up with friends or colleagues.
        </p>
        <p>
          Whether you want a quick espresso, a slice of pizza or a cold shake,
          you’ll find something to enjoy. Come in, settle down and refresh your day.
        </p>
      </div>
    </section>
  )
}
