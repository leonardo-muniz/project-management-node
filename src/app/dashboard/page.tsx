"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashBoardPage() {
    const { user } = useAuth();

    return (
        <div>
            <h1>Bem-vindo, {user?.name}</h1>
            <p>Seus projetos aparecerão aqui.</p>
        </div>
    );
}
