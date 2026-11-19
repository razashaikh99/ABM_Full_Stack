import useLoader from "./index.function";
const Loader = ({ fullScreen = false, size = 3, text = "" }) => {
    const { spinnerStyle, wrapperClass } = useLoader({ fullScreen, size, text });

    return (
        <div className={wrapperClass} role="status" aria-live="polite" aria-busy="true">
            <div
               className="rounded-full animate-spin border-4 border-solid border-black/[0.08] border-t-secondary"
                style={spinnerStyle}
                aria-hidden="true"
            />
            {text ? <span className="ml-3 text-sm text-accent">{text}</span> : null}
        </div>
    );
};

export default Loader;
