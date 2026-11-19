import Button from "../Button";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import FormField from "../FormField/index";
import PasswordField from "../PasswordField/index";
import { loginFormDefaults } from "../../config";
import useLoginForm from "./index.function";

export default function LoginForm() {
    const { isSubmitting, validationSchema, handleSubmit, errorMessage } = useLoginForm();

    return (
        <div>
            <p className="eyebrow mb-4">YOUR EVERYDAY, ALL IN ONE PLACE</p>

            <h1 className="auth-heading">Welcome home.</h1>

            <p className="auth-description">Sign in to your AlBayt Mart account. Good things are waiting.</p>

            {errorMessage && (
                <div
                   className="mb-6 border-l-2 border-red-600 bg-red-50 p-4 text-sm text-red-800"
                    role="alert"
                >
                    {errorMessage}
                </div>
            )}

            <Formik
                initialValues={loginFormDefaults}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-5" noValidate>
                    <Field
                        name="email"
                        label="Email address"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        component={FormField}
                    />

                    <Field
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                        placeholder="Enter your password"
                        component={PasswordField}
                    />

                    <div className="flex justify-end">
                        <Link to="/forgot" className="text-sm text-primary underline underline-offset-4">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? "Signing in…" : "Sign in"}
                    </Button>
                </Form>
            </Formik>

            <p className="mt-8 text-center text-sm text-muted">
                New around here?{" "}
                <Link to="/register" className="font-semibold text-primary underline underline-offset-4">
                    Create an account
                </Link>
            </p>
        </div>
    );
}
