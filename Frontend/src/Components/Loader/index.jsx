import useLoader from "./index.function";
const Loader = ({ fullScreen = false, size = 3, text = "" }) => {
    const {
        spinnerStyle,
        wrapperClass
    } = useLoader({ fullScreen, size, text });

    return (
        <div className={wrapperClass} role="status" aria-live="polite" aria-busy="true">
            <div
                className="rounded-full animate-spin"
                style={spinnerStyle}
                aria-hidden="true"
            />
            {text ? (
                <span className={`ml-3 text-sm`} style={{ color: "var(--color-accent)" }}>
                    {text}
                </span>
            ) : null}
        </div>
    );
};

export default Loader;
