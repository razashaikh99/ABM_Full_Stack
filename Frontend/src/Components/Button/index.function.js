import { buttonVariants } from "../../config";

export default function useButton({ variant, className }) {
    return [buttonVariants[variant], className].filter(Boolean).join(" ");
}
