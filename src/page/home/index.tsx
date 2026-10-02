import { Link } from "react-router";

const Home = () => {
  return (
    <main className="page-container">
      <section className="hero">
        <span className="hero-badge">✨ Welcome to MyApp</span>

        <h1>
          Build something <span>amazing</span> with us.
        </h1>

        <p>
          Discover new possibilities, improve your workflow, and bring your
          ideas to life with a simple and modern platform.
        </p>

        <div className="hero-actions">
          <Link to="/register" className="btn-primary">
            Get Started →
          </Link>

          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </section>

      <section className="features">
        <article className="feature-card">
          <div className="feature-icon">⚡</div>
          <h2>Fast & Simple</h2>
          <p>
            Enjoy a clean and simple experience designed to help you get things
            done faster.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🎨</div>
          <h2>Modern Design</h2>
          <p>
            A beautiful interface with a modern layout that looks great on
            desktop and mobile devices.
          </p>
        </article>

        <article className="feature-card">
          <div className="feature-icon">🔒</div>
          <h2>Secure Access</h2>
          <p>
            Create your account and explore a platform built with a focus on a
            smooth user experience.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Home;
