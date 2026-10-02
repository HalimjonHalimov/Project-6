import { Link } from "react-router";

const Contact = () => {
  return (
    <main className="page-container">
      <section className="contact-layout">
        <div className="contact-info">
          <span className="hero-badge">💬 Get in touch</span>

          <h1>
            Let's start a <span>conversation.</span>
          </h1>

          <p>
            Have a question or an idea? Send us a message.
            We'd love to hear from you.
          </p>

          <div className="contact-detail">
            <span className="detail-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>hello@myapp.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="detail-icon">⏰</span>
            <div>
              <h3>Working hours</h3>
              <p>Monday – Friday, 9:00 – 18:00</p>
            </div>
          </div>

          <Link to="/" className="text-link">
            ← Back to Home
          </Link>
        </div>

        <form className="form-card" onSubmit={(e) => e.preventDefault()}>
          <h2>Send us a message</h2>
          <p className="form-description">
            Fill in the form below.
          </p>

          <div className="form-group">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              placeholder="What is this about?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows={5}
              placeholder="Write your message..."
              required
            />
          </div>

          <button className="form-submit" type="submit">
            Send Message →
          </button>

          <p className="form-note">
            Demo form: messages are not sent to a server yet.
          </p>
        </form>
      </section>
    </main>
  )
}

export default Contact