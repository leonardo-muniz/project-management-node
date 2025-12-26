"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const { signIn } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await signIn(email, password);
        router.push("/dashboard");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
                <input placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <button>Entrar</button>
            </form>
        </div>
    );
}
