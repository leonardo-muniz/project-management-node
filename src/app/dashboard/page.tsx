"use client";

import { useEffect, useState } from "react";
import { getProjects, Project } from "@/services/projects.service";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";

export default function DashBoardPage() {
    const { user } = useAuth();

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getProjects().then(setProjects);
    }, []);

    return (
        <ProtectedRoute>
            <Navbar/>
            <div>
                <h1>Bem-vindo, {user?.name}</h1>
                <h3> Meus Projetos</h3>
                <button>Novo Projeto</button>
            </div>
            <div>
                {projects.map((project) => (
                    <Link key={project.id} href={`/dashboard/projects/${project.id}`}>
                        <h2>{project.name}</h2>
                    </Link>
                ))}
            </div>
        </ProtectedRoute>
    );
}
