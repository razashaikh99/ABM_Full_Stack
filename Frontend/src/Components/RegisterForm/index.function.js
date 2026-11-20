import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../Redux/actions/auth-action";
import { registerValidationSchema } from "../../validations_schemas/auth-validation-schema";

export default function useRegisterForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values, { resetForm }) => {
        setErrorMessage("");
        setIsSubmitting(true);

        try {
            await dispatch(registerUser({
                name: values.name,
                email: values.email,
                password: values.password
            }));
            toast.success("Account created successfully!");
            resetForm();
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message || "Registration failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        isSubmitting,
        errorMessage,
        validationSchema: registerValidationSchema,
        handleSubmit,
    };
}
