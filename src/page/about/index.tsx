import { Link } from "react-router";

const About = () => {
  return (
   <main className="page-container">
      <section className="hero">
        <span className="hero-badge">✨ About MyApp</span>

        <h1>
          We make things <span>simple.</span>
        </h1>

        <p>
          MyApp is a modern platform created to make your
          digital experience easier, faster, and more enjoyable.
          Our goal is to turn complex ideas into simple solutions.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="btn-primary">
            Contact Us →
          </Link>

          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>

      <section className="features">
        <article className="feature-card">
          <div className="feature-icon">🎯</div>
          <h2>Our Mission</h2>
          <p>
            Make technology accessible and useful for everyone
            through simple and practical solutions.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">💡</div>
          <h2>Our Vision</h2>
          <p>
            Create digital experiences that help people work
            smarter and achieve more every day.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🤝</div>
          <h2>Our Values</h2>
          <p>
            We value simplicity, continuous improvement,
            creativity, and a great user experience.
          </p>
        </article>
      </section>
    </main>
  )
}

export default About