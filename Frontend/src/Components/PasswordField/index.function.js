import { useState } from "react";

export default function usePasswordField() {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => setVisible((value) => !value);

    return { visible, handleToggle };
}
