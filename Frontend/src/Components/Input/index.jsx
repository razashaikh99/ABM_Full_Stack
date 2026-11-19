import useInput from "./index.function";

export default function Input({
    as: inputTag = "input",
    label,
    id,
    name,
    error,
    suffix,
    variant = "field",
    className = "",
    wrapperClassName = "",
    "aria-describedby": describedBy,
    "aria-invalid": invalid,
    ...props
}) {
    const InputElement = inputTag;

    const {
        inputId,
        errorId,
        styles,
        description,
    } = useInput({ id, name, error, suffix, variant, className, describedBy });

    const control = (
        <InputElement
            {...props}
            id={inputId}
            name={name}
            className={styles}
            aria-invalid={error ? true : invalid}
            aria-describedby={description}
        />
    );

    if (!label && !error && !suffix && !wrapperClassName) {
        return control;
    }

    return (
        <div className={wrapperClassName}>
            {label && <label htmlFor={inputId} className="field-label">{label}</label>}

            <div className="relative">
                {control}
                {suffix}
            </div>

            {error && (
                <p id={errorId} className="mt-2 text-xs leading-5 text-red-700" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
