import { Link } from "react-router-dom";
import useForgotPasswordForm from "./index.function";
import { forgotPasswordFormDefaults } from "../../config/index";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotPasswordForm = () => {
    const {
        validationSchema,
        handleSubmit
    } = useForgotPasswordForm();

    return (
        <div className="max-w-xl mx-3 lg:mx-auto bg-foreground rounded-2xl shadow-lg py-8 px-6 my-15">
            <h2 className="text-2xl font-semibold text-primary text-center mb-6">
                Forgot Your Password? 🔑
            </h2>
            <p className="text-center text-accent text-sm mb-8">
                Enter your registered email address, and we'll send you a link to reset your password.
            </p>

            <Formik
                initialValues={forgotPasswordFormDefaults}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-5">

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

                    <button
                        type="submit"
                        className="w-full bg-secondary text-foreground py-3 rounded-lg font-medium hover:bg-primary transition-all cursor-pointer"
                    >
                        Send Reset Link
                    </button>
                </Form>
            </Formik>

            <p className="text-center text-sm mt-6 text-accent">
                Remember your password?{" "}
                <Link to="/login" className="text-secondary font-medium hover:underline">
                    Back to Login
                </Link>
            </p>
        </div>
    );
};

export default ForgotPasswordForm;
