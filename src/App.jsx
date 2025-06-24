import { useState } from 'react'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthDate: ''
  })
  const [submitted, setSubmitted] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
  }

  return (
    <>
      <div className="circle-image-container">
        <img src="/kanji.png" alt="Kanji" className="circle-image" />
      </div>
      <div className="registro-container" translate="no">
        <div className="brand-title-inside">
          <span className="brand-stranger">stranger</span>
          <span className="brand-drug">Drug</span>
        </div>
        <form onSubmit={handleSubmit} className="registro-form">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Birth Date"
            value={form.birthDate}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        {submitted && (
          <div className="registro-datos">
            <h2>Entered Data:</h2>
            <ul>
              <li><b>First Name:</b> {submitted.name}</li>
              <li><b>Last Name:</b> {submitted.lastName}</li>
              <li><b>Email:</b> {submitted.email}</li>
              <li><b>Password:</b> {submitted.password}</li>
              <li><b>Phone:</b> {submitted.phone}</li>
              <li><b>Birth Date:</b> {submitted.birthDate}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default App
