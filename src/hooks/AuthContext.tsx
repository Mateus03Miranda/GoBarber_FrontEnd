import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: Record<string, unknown>;
}

interface AuthContextData {
    user: Record<string, unknown>;
    signIn(LoginData: LoginData): Promise<void>;
    signOut(): void;
}

interface LoginData {
    email: string;
    password: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@GobarberToken');
        const user = localStorage.getItem('@GobarberUser');
        if (token && user) {
            return { token, user: JSON.parse(user) };
        }
        return {} as AuthState;
    });
    const signIn = useCallback(async ({ email, password }: LoginData) => {
        const response = await api.post<{
            token: string;
            user: Record<string, unknown>;
        }>('sessions', {
            email,
            password,
        });
        const { token, user } = response.data;
        localStorage.setItem('@GobarberToken', token);
        localStorage.setItem('@GobarberUser', JSON.stringify(user));
        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@GobarberToken');
        localStorage.removeItem('@GobarberUser');
        setData({} as AuthState);
    }, []);
    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextData => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
};
