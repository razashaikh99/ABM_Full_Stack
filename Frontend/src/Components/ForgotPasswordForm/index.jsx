import Button from "../Button";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import FormField from "../FormField/index";
import { forgotPasswordFormDefaults } from "../../config";
import useForgotPasswordForm from "./index.function";

export default function ForgotPasswordForm() {
    const { validationSchema, handleSubmit } = useForgotPasswordForm();

    return (
        <div>
            <Mail size={28} strokeWidth={1.3} className="mb-6 text-primary" />

            <h1 className="auth-heading">Let's get you back.</h1>

            <p className="auth-description">
                Password reset emails aren’t available yet. Leave your account email below to prepare a
                request to our support team.
            </p>

            <Formik
                initialValues={forgotPasswordFormDefaults}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="space-y-6" noValidate>
                    <Field
                        name="email"
                        type="email"
                        label="Account email address"
                        autoComplete="email"
                        placeholder="you@example.com"
                        component={FormField}
                    />

                    <Button className="w-full" type="submit">
                        Contact support
                    </Button>
                </Form>
            </Formik>

            <p className="mt-8 text-center">
                <Link to="/login" className="text-link">
                    Back to sign in
                </Link>
            </p>
        </div>
    );
}
