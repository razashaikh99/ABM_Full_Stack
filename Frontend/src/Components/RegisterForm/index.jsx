import { Link } from "react-router-dom";
import useRegisterForm from "./index.function";
import { registerFormDefaults } from "../../config/index";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
    const {
        showPassword,
        showConfirmPassword,
        isSubmitting,
        validationSchema,
        handleSubmit,
        handleTogglePassword,
        handleToggleConfirmPassword
    } = useRegisterForm();

    return (
        <div className="max-w-xl mx-3 lg:mx-auto bg-foreground rounded-2xl shadow-lg py-8 px-6 my-15">
            <h2 className="text-2xl font-semibold text-primary text-center mb-6">
                Create Your Account 🛒
            </h2>

            <Formik
                initialValues={registerFormDefaults}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-5">

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
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <ErrorMessage
                            name="password"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

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
                            onClick={handleToggleConfirmPassword}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        <ErrorMessage
                            name="confirmPassword"
                            component="p"
                            className="text-red-500 text-sm mt-1"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary text-foreground py-3 rounded-lg font-medium hover:bg-primary transition-all cursor-pointer disabled:opacity-70"
                    >
                        {isSubmitting ? "Creating Account..." : "Create Account"}
                    </button>
                </Form>
            </Formik>

            <p className="text-center text-sm mt-6 text-accent">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary font-medium hover:underline">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;
