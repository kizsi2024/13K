import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash} from "react-icons/fa";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validation patterns
  const validationPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    username: /^[a-zA-Z0-9_-]{3,16}$/,
    // Password must be at least 8 characters with at least 1 uppercase, 1 lowercase, and 1 number
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  };

  // Validation error messages
  const errorMessages = {
    email: "Please enter a valid email address",
    username: "Username must be 3-16 characters and can only contain letters, numbers, underscores and hyphens",
    password: "Password must be at least 8 characters and include uppercase, lowercase and number"
  };

  const validateField = (name, value) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    
    if (validationPatterns[name] && !validationPatterns[name].test(value)) {
      return errorMessages[name];
    }
    
    return "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live validation as user types
    const fieldError = validateField(name, value);
    setErrors({
      ...errors,
      [name]: fieldError
    });
    
    // Clear general error when user starts typing again
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields before submission
    let formHasErrors = false;
    const newErrors = { ...errors };
    
    // Only validate email if it's the signup form
    const fieldsToValidate = isLoginForm ? ['username', 'password'] : ['email', 'username', 'password'];
    
    fieldsToValidate.forEach(field => {
      const fieldError = validateField(field, formData[field]);
      newErrors[field] = fieldError;
      if (fieldError) formHasErrors = true;
    });
    
    setErrors(newErrors);
    
    if (formHasErrors) {
      setError("Please correct the errors in the form");
      return;
    }
    
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const endpoint = isLoginForm ? '/api/login' : '/api/register';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: !isLoginForm ? formData.email : undefined, // Only send email for registration
          password: formData.password,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSuccess(data.message);
      
      // If login is successful, you might want to store user info or token
      if (isLoginForm && data.user) {
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirect or update UI for logged in user
        console.log('Logged in user:', data.user);
      }
      
      // Clear form after successful signup
      if (!isLoginForm) {
        setFormData({ email: "", username: "", password: "" });
      }
      
    } catch (error) {
      setError(error.message);
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Clear form data and messages when switching between forms
    setFormData({ email: "", username: "", password: "" });
    setError("");
    setSuccess("");
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-header">
          <h1>{isLoginForm ? "Login" : "Sign Up"}</h1>
          <p className="subtitle">
            {isLoginForm
              ? "Welcome back! Please login to your account"
              : "Create an account to get started"}
          </p>
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleSubmit}>
          {!isLoginForm && (
            <div className="input-field">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && <div className="field-error">{errors.email}</div>}
            </div>
          )}

          <div className="input-field">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            {errors.username && <div className="field-error">{errors.username}</div>}
          </div>

          <div className="input-field">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <div 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && <div className="field-error">{errors.password}</div>}
          </div>

          {isLoginForm && (
            <div className="extras">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading 
              ? "Processing..." 
              : isLoginForm 
                ? "Login" 
                : "Sign Up"
            }
          </button>
        </form>

        <div className="form-switch">
          <p>
            {isLoginForm
              ? "Don't have an account?"
              : "Already have an account?"}
            <span onClick={toggleForm}>
              {isLoginForm ? " Sign Up" : " Login"}
            </span>
          </p>
        </div>

        {!isLoginForm && (
          <div className="terms">
            <p>
              By signing up, you agree to our 
              <a href="#terms"> Terms of Service</a> and 
              <a href="#privacy"> Privacy Policy</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;