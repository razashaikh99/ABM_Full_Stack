import * as Yup from "yup";
import { toast } from "react-toastify";

export default function useForgotPasswordForm() {

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log("Reset Password Request:", values);
        toast.success("Password reset link sent to your email!");
        resetForm();
    };

    return {
        validationSchema,
        handleSubmit
    };
}
