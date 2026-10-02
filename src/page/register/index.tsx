import { Link } from "react-router";

const Register = () => {
  return (
     <main className="page-container auth-container">
      <section className="form-card auth-card">
        <div className="auth-logo">
          MyApp<span>.</span>
        </div>

        <span className="hero-badge">🚀 Join MyApp</span>

        <h1>Create your account</h1>

        <p className="form-description">
          Get started with your free account.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="register-name">Full name</label>
            <input
              id="register-name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="register-confirm">
              Confirm password
            </label>
            <input
              id="register-confirm"
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <button className="form-submit" type="submit">
            Create Account →
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Sign in</Link>
        </p>

        <Link to="/" className="text-link auth-back">
          ← Back to Home
        </Link>

        <p className="form-note">
          Demo only. Account registration is not connected yet.
        </p>
      </section>
    </main>
  )
}

export default Register