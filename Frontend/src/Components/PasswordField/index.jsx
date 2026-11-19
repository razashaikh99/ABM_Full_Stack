import Button from "../Button";
import { Eye, EyeOff } from "lucide-react";
import FormField from "../FormField/index";
import usePasswordField from "./index.function";

export default function PasswordField(props) {
    const { visible, handleToggle } = usePasswordField();

    return (
        <FormField
            {...props}
            type={visible ? "text" : "password"}
            suffix={
                <Button
                    type="button"
                    onClick={handleToggle}
                    aria-label={(visible ? "Hide " : "Show ") + props.label.toLowerCase()}
                    aria-pressed={visible}
                    variant="plain"
                   className="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-muted hover:text-primary"
                >
                    {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                </Button>
            }
        />
    );
}
