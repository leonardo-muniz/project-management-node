export interface Project {
    id: number;
    name: string;
    description?: string;
}

export async function getProjects(): Promise<Project[]> {
    return [
        { id: 1, name: "Projeto 1"},
        { id: 2, name: "Projeto 2"},
        { id: 3, name: "Projeto 3"}
    ];
}
