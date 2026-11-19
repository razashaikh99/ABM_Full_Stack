import * as Yup from "yup";

export default function useForgotPasswordForm() {
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email address").required("Email is required"),
    });

    const handleSubmit = (values) => {
        window.location.href =
            "mailto:info.albaytmart@gmail.com?subject=" +
            encodeURIComponent("Account access help") +
            "&body=" +
            encodeURIComponent("Hello, I need help accessing my AlBayt Mart account: " + values.email);
    };

    return {
        validationSchema,
        handleSubmit,
    };
}
