import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    // ✅ Validation Schema
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
    });

    // ✅ Handle Submit
    const handleSubmit = async (values, { resetForm }) => {
        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed");
            }

            login(data.user, data.token);
            toast.success("Login successful!");
            resetForm();
            navigate("/");
        } catch (error) {
            toast.error(error.message || "Login failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-xl mx-3 lg:mx-auto bg-foreground rounded-2xl shadow-lg py-8 px-6 my-15">
            <h2 className="text-2xl font-semibold text-primary text-center mb-6">
                Welcome 👋
            </h2>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label className="block text-accent mb-1">Email Address</label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary"
                        />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <label className="block text-accent mb-1">Password</label>
                        <Field
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary pr-10"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-9 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a
                            href="/forgot"
                            className="text-sm text-secondary hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary text-foreground py-3 rounded-lg font-medium hover:bg-primary transition-all cursor-pointer disabled:opacity-70"
                    >
                        {isSubmitting ? "Logging In..." : "Login"}
                    </button>
                </Form>
            </Formik>

            {/* Sign up Redirect */}
            <p className="text-center text-sm mt-6 text-accent">
                Don’t have an account?{" "}
                <a href="/register" className="text-secondary font-medium hover:underline">
                    Register
                </a>
            </p>
        </div>
    );
};

export default LoginForm;
