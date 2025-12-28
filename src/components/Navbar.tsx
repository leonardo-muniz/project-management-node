"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const { signOut, user } = useAuth();
    const router = useRouter();

    function handleLogout() {
        signOut();
        router.push("/login");
    }

    return (
        <nav>
            <h1>Project Management</h1>
            <div>
                <span><b>User:</b> {user?.name}</span>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </nav>
    );
}
