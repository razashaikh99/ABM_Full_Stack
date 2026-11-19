import Input from "../Input";

export default function Checkbox({ label, className = "", ...props }) {
    return (
        <label className={"flex cursor-pointer items-center gap-3 text-sm text-muted " + className}>
            <Input type="checkbox" variant="choice" {...props} />
            {label}
        </label>
    );
}
