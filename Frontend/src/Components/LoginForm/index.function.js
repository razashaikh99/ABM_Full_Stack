import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../Redux/actions/auth-action";
import { loginValidationSchema } from "../../validations_schemas/auth-validation-schema";

export default function useLoginForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            await dispatch(loginUser({
                email: values.email,
                password: values.password
            }));
            toast.success("Login successful!");
            resetForm();
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message || "Login failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        errorMessage,
        validationSchema: loginValidationSchema,
        handleSubmit,
    };
}
