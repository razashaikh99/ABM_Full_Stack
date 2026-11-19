import Input from "../Input";
import useFormField from "./index.function";

export default function FormField({ id, name, field, form, error, className = "", ...props }) {
    const {
        inputId,
        fieldError,
    } = useFormField({ id, name, field, form, error });

    return (
        <Input
            {...field}
            {...props}
            id={inputId}
            name={field?.name || name}
            error={fieldError}
            wrapperClassName={className}
        />
    );
}
