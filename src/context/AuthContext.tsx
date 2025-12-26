"use client";

import { createContext, useContext, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthContextData {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

    async function signIn(email: string, password: string) {
        setUser({
            id: 1,
            name: "Leonardo",
            email: "leonardo@email.com",
        });
    }

    function signOut() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
