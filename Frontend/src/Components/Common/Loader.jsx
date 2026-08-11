// src/Components/Common/Loader.jsx
import React from "react";

/**
 * Loader component
 * Props:
 *  - fullScreen (boolean): if true shows centered fullscreen overlay
 *  - size (number): tailwind width/height in rem (default 3 -> w-12 h-12)
 *  - text (string): optional small text under spinner
 *
 * Usage:
 * <Loader />                    // inline small spinner
 * <Loader size={4} />          // larger inline spinner
 * <Loader fullScreen text="Loading..." />
 */

const Loader = ({ fullScreen = false, size = 3, text = "" }) => {
    // convert size (rem) to Tailwind classes (w-? h-?) roughly: rem*4 = px -> use inline style for exact
    const px = `${size * 16}px`; // size in rem -> px (1rem = 16px)
    const spinnerStyle = {
        width: px,
        height: px,
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "rgba(0,0,0,0.08)",
        borderTopColor: "var(--color-secondary)", // orange accent for top border
    };

    const wrapperClass = fullScreen
        ? "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
        : "inline-flex items-center";

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
