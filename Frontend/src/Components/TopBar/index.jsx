import { FiPhone, FiMail } from "react-icons/fi";

const TopBar = () => {
    return (
        <div
            className="flex items-center justify-between px-2 md:px-35 py-3 text-[12px] md:text-sm"
            style={{ backgroundColor: "var(--color-accent)", color: "var(--color-foreground)" }}
        >
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <FiPhone className="w-4 h-4" />
                    <span>+92-329-8660141</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <FiMail className="w-4 h-4" />
                <span>info.albaytmart@gmail.com</span>
            </div>
        </div>
    );
};

export default TopBar;
