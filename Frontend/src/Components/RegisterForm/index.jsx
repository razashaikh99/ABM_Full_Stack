import Button from "../Button";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import FormField from "../FormField/index";
import PasswordField from "../PasswordField/index";
import { registerFormDefaults } from "../../config";
import useRegisterForm from "./index.function";

export default function RegisterForm() {
    const { isSubmitting, validationSchema, handleSubmit, errorMessage } = useRegisterForm();

    return (
        <div>
            <p className="eyebrow mb-4">MAKE YOURSELF AT HOME</p>

            <h1 className="auth-heading">A little more you.</h1>

            <p className="auth-description">Create your account and make space for everyday favourites.</p>

            {errorMessage && (
                <div
                   className="mb-6 border-l-2 border-red-600 bg-red-50 p-4 text-sm text-red-800"
                    role="alert"
                >
                    {errorMessage}
                </div>
            )}

            <Formik
                initialValues={registerFormDefaults}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-4" noValidate>
                    <Field
                        name="name"
                        label="Full name"
                        autoComplete="name"
                        placeholder="Your full name"
                        component={FormField}
                    />

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
                        autoComplete="new-password"
                        placeholder="At least 6 characters"
                        component={PasswordField}
                    />

                    <Field
                        name="confirmPassword"
                        label="Confirm password"
                        autoComplete="new-password"
                        placeholder="Re-enter your password"
                        component={PasswordField}
                    />

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? "Creating your account…" : "Create account"}
                    </Button>
                </Form>
            </Formik>

            <p className="mt-7 text-center text-sm text-muted">
                Already part of the family?{" "}
                <Link to="/login" className="font-semibold text-primary underline underline-offset-4">
                    Sign in
                </Link>
            </p>
        </div>
    );
}
