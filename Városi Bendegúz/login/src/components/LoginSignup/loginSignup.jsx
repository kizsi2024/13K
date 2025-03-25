import React, { useState } from "react"
import "./loginSignup.cs"
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

const loginSignup = () => {
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
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const validationPatterns = {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        username: /^[a-zA-Z0-9]{3,30}$/,
        password: /^.{6,}$/,
    }

    const errorMessages = {
        email: "Invalid email address",
        username: "Username must be 3-30 characters long",
        password: "Password must be at least 6 characters long",
    }
    const validationFields = (name, value) => {
        if (!value.trim()) {
            return `${name.charAt(0).toUpperCase() + name.slice(1)} is requied`
        }
        if (validationPatterns[name] && !validationPatterns[name].test(value)) {
            return errorMessages[name]
        }
        return ""
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        const fieldError = validationFields(name, value)
        setErrors({
            ...errors,
            [name]: fieldError,
        })
        if (error) setError("")

        const handleSubmit = async (e) => {
            e.preventDefault()

            let formHasErrors = false
            const newErrors = { ...errors }

            const fieldsToValidat = isLoginForm ? ["username", "password"] : ["email", "username", "password"]
            fieldsToValidat.forEach((field) => {
                const fieldError = validationFields(field, formData[field])
                newErrors[field] = fieldError
                if (fieldError) formHasErrors = true
            })
            setErrors(newErrors)

            if (formHasErrors) {
                setError("Please fix the errors above")
                return
            }
            setIsLoading(true)
            setError("")
            setSuccess("")
            try {
                const endpoint = isLoginForm ? "/api/login" : "/api/register"
                const response = await fetch(`http://localhost:5000${endpoint}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: !isLoginForm ? formData.email : undefined,
                        username: formData.username,
                        password: formData.password,
                    }),
                })
                const data = await response.json()
                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong")
                }
                setSuccess(data.message)
                if (isLoginForm && data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user))
                    console.log("User logged in", data.user);

                    if (!isLoginForm) {
                        setFormData({
                            email: "",
                            username: "",
                            password: "",
                        })
                    }
                }
            } catch (error) {
                setError(error.message)
                console.error(error)
            } finally {
                setIsLoading(false)
            }
            const toggleForm = () => {
                setIsLoginForm(!isLoginForm)
                setFormData({
                    email: "",
                    username: "",
                    password: "",
                })
                setError("")
                setSuccess("")
            }
            return (
                <div className="container">
                    <div className="form-container">
                        <div className="form-header">
                            <h1>{isLoginForm ? "Login" : "Sing up"}</h1>
                            <p className="subtitle">
                                {isLoginForm
                                    ? "Login with your email and password"
                                    : "Sing up with your email, username and password"
                                }
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
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                    className="show-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                                {errors.password && <div className="field-error">{errors.password}</div>}
                            </div>
                            {isLoginForm && (
                                <div className="extras">
                                    <div className="remember-me">
                                        <input type="checkbox" id="rememver" />
                                        <label htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="forgot-password">
                                        <a href="#forgot">Forgot password?</a>

                                    </div>
                                </div>
                            )}
                            <button type="submit" className="submit-btn" disabled={isLoading}>
                                {isLoading ? "Processing..." : isLoginForm ? "Login" : "Sing up"}
                            </button>
                        </form>
                        <div className="form-switch">
                            <p>
                                {isLoginForm ? "Don't have an account?" : "Already have an account?"}
                                <span onClick={toggleForm}>
                                    {isLoginForm ? "Sing up" : "Login"}
                                </span>
                            </p>
                        </div>
                        {!isLoginForm && (
                            <div className="terms">
                                <p>
                                    By clicking Sing up, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
    }
}

export default loginSignup