import { Link } from "react-router-dom";
import useButton from "./index.function";

export default function Button({
    children,
    variant = "primary",
    className = "",
    type = "button",
    to,
    ...props
}) {
    const styles = useButton({ variant, className });

    if (to !== undefined) {
        return (
            <Link to={to} className={styles} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={styles} {...props}>
            {children}
        </button>
    );
}
