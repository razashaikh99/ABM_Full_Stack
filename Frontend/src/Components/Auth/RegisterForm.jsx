import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // ✅ Validation Schema
    const validationSchema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be at least 3 characters")
            .required("Full name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Please confirm your password"),
    });

    // ✅ Handle Submit
    const handleSubmit = (values, { resetForm }) => {
        console.log("Registration Data:", values);
        toast.success("Account Created Successfully!");
        resetForm();
    };

    return (
        <div className="max-w-xl mx-3 lg:mx-auto bg-foreground rounded-2xl shadow-lg py-8 px-6 my-15">
            <h2 className="text-2xl font-semibold text-primary text-center mb-6">
                Create Your Account 🛒
            </h2>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-5">
                    {/* Name Field */}
                    <div>
                        <label className="block text-accent mb-1">Full Name</label>
                        <Field
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary"
                        />
                        <ErrorMessage
                            name="name"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

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
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary pr-10"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-11 text-gray-500"
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

                    {/* Confirm Password Field */}
                    <div className="relative">
                        <label className="block text-accent mb-1">Confirm Password</label>
                        <Field
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary pr-10"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-11 text-gray-500"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <ErrorMessage
                            name="confirmPassword"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-secondary text-foreground py-3 rounded-lg font-medium hover:bg-primary transition-all cursor-pointer"
                    >
                        Create Account
                    </button>
                </Form>
            </Formik>

            {/* Login Redirect */}
            <p className="text-center text-sm mt-6 text-accent">
                Already have an account?{" "}
                <a href="/login" className="text-secondary font-medium hover:underline">
                    Login
                </a>
            </p>
        </div>
    );
};

export default RegisterForm;
