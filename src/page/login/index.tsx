import { Link } from "react-router";

const Login = () => {
  return (
    <main className="page-container auth-container">
      <section className="form-card auth-card">
        <div className="auth-logo">
          MyApp<span>.</span>
        </div>

        <span className="hero-badge">👋 Welcome back</span>

        <h1>Sign in to your account</h1>

        <p className="form-description">
          Enter your details to continue.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />
          </div>

          <button className="form-submit" type="submit">
            Sign In →
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create account</Link>
        </p>

        <Link to="/" className="text-link auth-back">
          ← Back to Home
        </Link>

        <p className="form-note">
          Demo only. Login authentication is not connected yet.
        </p>
      </section>
    </main>
  )
}

export default Login