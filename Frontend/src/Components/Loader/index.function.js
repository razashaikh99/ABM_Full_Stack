export default function useLoader({ fullScreen = false, size = 3 }) {

    const px = `${size * 16}px`;
    const spinnerStyle = {
        width: px,
        height: px,
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.08)",
        borderTopColor: "var(--color-secondary)",
    };

    const wrapperClass = fullScreen
        ? "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        : "inline-flex items-center";

    return {
        spinnerStyle,
        wrapperClass
    };
}
