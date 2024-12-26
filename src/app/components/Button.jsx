"use client";

import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

export default function Button({
    label,
    onClick,
    variant = "primary",
    size = "medium",
    icon,
    loading = false,
    disabled = false,
}) {
  // Dynamic classes
    const baseStyles =
        "flex items-center justify-center font-semibold rounded transition-all duration-300 ease-in-out";
    const variantStyles = {
        primary: "bg-yellow text-charcoal hover:bg-yellow-600",
        secondary: "bg-charcoal text-white hover:bg-charcoal-600",
        outline: "border-2 border-yellow text-charcoal hover:bg-yellow-100",
    };
    const sizeStyles = {
        small: "px-4 py-2 text-sm rounded",
        medium: "px-6 py-3 text-md",
        large: "px-8 py-4 text-xl rounded-full tracking-wide",
    };

    return (
        <motion.button
            whileHover={{ scale: !disabled && 1.05 }}
            whileTap={{ scale: !disabled && 0.95 }}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseStyles} ${variantStyles[variant]} ${
                sizeStyles[size]
            }     ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label={label}
        >
            {/* Loading Spinner */}
            {loading && <FiLoader className="animate-spin mr-2" />}
            {/* Icon and Label */}
            {icon && !loading && <span className="mr-2">{icon}</span>}
            {label}
        </motion.button>
    );
}
