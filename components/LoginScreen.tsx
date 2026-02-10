import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ActivityIndicator,
    KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LoginScreen.styles';
import { useLogin } from './useLogin';

//handle dismiss keyboard non aktif di web
const DismissKeyboardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (Platform.OS === 'web') {
        return <>{children}</>;
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    );
};

const LoginScreen: React.FC = () => {
    const {
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
    } = useLogin();

    return (
        <SafeAreaView style={styles.container}>
            {/* KeyboardAvoidingView memastikan input tidak tertutup keyboard di iOS */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <DismissKeyboardWrapper>
                    <View style={styles.innerContainer}>

                        <View style={styles.headerContainer}>
                            <Text style={styles.title}>Welcome Back</Text>
                            <Text style={styles.subtitle}>Sign in to continue</Text>
                        </View>

                        <View style={styles.formContainer}>
                            {/* Input Email */}
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Email Address</Text>
                                <TextInput
                                    style={[styles.input, errors.email ? styles.inputError : null]}
                                    placeholder="Enter your email"
                                    placeholderTextColor="#A0A0A0"
                                    value={email}
                                    onChangeText={(text) => {
                                        setEmail(text);
                                        if (errors.email) setErrors({ ...errors, email: undefined });
                                    }}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />
                                {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
                            </View>

                            {/* Input Password */}
                            <View style={styles.inputGroup}>
                                <Text style={styles.label}>Password</Text>
                                <View style={styles.passwordContainer}>
                                    <TextInput
                                        style={[styles.input, styles.passwordInput, errors.password ? styles.inputError : null]}
                                        placeholder="Enter your password"
                                        placeholderTextColor="#A0A0A0"
                                        value={password}
                                        onChangeText={(text) => {
                                            setPassword(text);
                                            if (errors.password) setErrors({ ...errors, password: undefined });
                                        }}
                                        // Security: secureTextEntry
                                        secureTextEntry={!isPasswordVisible}
                                        autoCapitalize="none"
                                    />
                                    {/* Toggle Show/Hide Password */}
                                    <TouchableOpacity
                                        onPress={togglePasswordVisibility}
                                        style={styles.eyeIcon}
                                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                                    >
                                        <Text style={styles.eyeText}>
                                            {isPasswordVisible ? 'Hide' : 'Show'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                            </View>

                            {/* Tombol Login */}
                            {/* Validation Logic: Disabled jika form tidak valid */}
                            <TouchableOpacity
                                style={[styles.button, (!isFormValid || isLoading) ? styles.buttonDisabled : null]}
                                onPress={handleLogin}
                                disabled={!isFormValid || isLoading}
                                activeOpacity={0.8}
                            >
                                {isLoading ? (
                                    <ActivityIndicator size="small" color="#FFFFFF" />
                                ) : (
                                    <Text style={styles.buttonText}>Log In</Text>
                                )}
                            </TouchableOpacity>

                            {!isFormValid && (email.length > 0 || password.length > 0) && (
                                <Text style={styles.validationHint}>
                                    {(!validateEmail(email) && email.length > 0) ? "Email tidak valid. " : ""}
                                    {(!validatePassword(password) && password.length > 0) ? "Password minimal 8 karakter." : ""}
                                </Text>
                            )}
                        </View>

                    </View>
                </DismissKeyboardWrapper>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default LoginScreen;

