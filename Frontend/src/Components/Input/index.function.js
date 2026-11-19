import { useId } from "react";

export default function useInput({ id, error, suffix, variant, className, describedBy }) {
    const generatedId = useId();
    const inputId = id || generatedId;
    const errorId = inputId + "-error";
    const styles = [
        variant === "field" ? "field-input" : "",
        variant === "choice" ? "h-4 w-4 accent-primary" : "",
        suffix ? "pr-12" : "",
        error ? "border-red-600" : "",
        className,
    ].filter(Boolean).join(" ");

    return {
        inputId,
        errorId,
        styles,
        description: [describedBy, error ? errorId : ""].filter(Boolean).join(" ") || undefined,
    };
}
