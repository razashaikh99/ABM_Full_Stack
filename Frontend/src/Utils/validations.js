// src/Utils/validations.js

/**
 * ✅ Validate Email Format
 */
export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
};

/**
 * 🔒 Validate Password Strength
 * - Minimum 6 characters
 * - At least one uppercase, one lowercase, one number
 */
export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
};

/**
 * 🧍 Validate Full Name
 */
export const validateName = (name) => {
    return name.trim().length >= 3;
};

/**
 * 📞 Validate Pakistani Phone Number
 * e.g. 03001234567 or +923001234567
 */
export const validatePhone = (phone) => {
    const regex = /^(?:\+92|0)?3\d{9}$/;
    return regex.test(phone.trim());
};

/**
 * 📦 Validate Address (for Checkout / Contact forms)
 */
export const validateAddress = (address) => {
    return address.trim().length >= 10;
};

/**
 * 💬 General Form Validator Helper
 */
export const validateForm = (fields) => {
    const errors = {};

    if ("email" in fields && !validateEmail(fields.email))
        errors.email = "Invalid email format";

    if ("password" in fields && !validatePassword(fields.password))
        errors.password = "Password must be 6+ chars, include uppercase, lowercase & number";

    if ("name" in fields && !validateName(fields.name))
        errors.name = "Name must be at least 3 characters";

    if ("phone" in fields && !validatePhone(fields.phone))
        errors.phone = "Invalid phone number";

    if ("address" in fields && !validateAddress(fields.address))
        errors.address = "Address must be at least 10 characters";

    return errors;
};
