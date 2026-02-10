import { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';

// Interface 
interface ValidationErrors {
    email?: string;
    password?: string;
}

export const useLogin = () => {
    // === State Management (useState) ===
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [errors, setErrors] = useState<ValidationErrors>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    // Validasi format email
    const validateEmail = (inputEmail: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(inputEmail);
    };

    // Validasi password 
    const validatePassword = (inputPassword: string): boolean => {
        return inputPassword.length >= 8;
    };

    // Effect untuk mengecek validitas form email atau password 
    useEffect(() => {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        // Update state error untuk feedback visual real-time
        setIsFormValid(isEmailValid && isPasswordValid);
    }, [email, password]);

    // Handler Login button 
    const handleLogin = () => {
        const currentErrors: ValidationErrors = {};
        if (!validateEmail(email)) {
            currentErrors.email = 'Format email tidak valid.';
        }

        if (!validatePassword(password)) {
            currentErrors.password = 'Password harus minimal 8 karakter.';
        }

        if (Object.keys(currentErrors).length > 0) {
            setErrors(currentErrors);
            return;
        }

        setIsLoading(true);

        // Simulasi network request (2 detik)
        setTimeout(() => {
            setIsLoading(false);
            setErrors({});
            // Check Platform for Alert
            if (Platform.OS === 'web') {
                window.alert(`Login Berhasil\nSelamat datang, ${email}!`);
            } else {
                Alert.alert('Login Berhasil', `Selamat datang, ${email}!`);
            }
        }, 2000);
    };

    // Handler toggle visibility password
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        isPasswordVisible,
        togglePasswordVisibility,
        errors,
        setErrors,
        isFormValid,
        isLoading,
        handleLogin,
        validateEmail,
        validatePassword,
    };
};
