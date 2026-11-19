export default function useFormField({ id, name, field, form, error }) {
    const fieldName = field?.name || name;

    const inputId = id || fieldName;

    const fieldError = error || (form?.touched?.[fieldName] && form?.errors?.[fieldName]);

    return { inputId, fieldError, errorId: inputId + "-error" };
}
