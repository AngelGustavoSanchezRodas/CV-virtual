import type {UserProfile, Project, My_Education} from '../types/portfolio';

export const MY_PROFILE: UserProfile = {
    name: "Angel Gustavo Sánchez Rodas",
    position: "Systems Engineering Student & Full Stack Developer",
    aboutMe: "Estudiante de Ingeniería en Sistemas con enfoque en desarrollo Full Stack. Sólida comprensión de Java y Spring Boot para la creación de APIs RESTful. Experiencia práctica en diseño de bases de datos y conocimientos de Docker.",
    contact: {
        email: "sangelgustavocomo@gmail.com",
        phone: "+502 5846-3811",
        linkedIn: "https://is.gd/PerfilLinkedln",
        github: "https://is.gd/PerfilGitHub",
        certificates: "https://is.gd/PortafolioCertificaciones",
        cvPdf: "/CV_Angel_Rodas.pdf"
    }
};

export const MY_EDUCATION: My_Education[] = [

    {
        school: "Universidad Mariano Gálvez de Guatemala",
        degree: "Ingeniería en Sistemas y Ciencias de la Computación",
        period: "2024 - Presente"
    },
    {
        school: "Escuela Tecnica Ciencias Aplicada ESTECA-PC",
        degree: "Perito en Administracion de Empresas",
        period: "2021 - 2023"
    }
];

export const MY_PROJECTS: Project[] = [
    {
        title: "TaskFlow | Gestor de Tareas Full Stack",
        description: "Plataforma integral para organización y seguimiento de tareas en tiempo real. Backend en Java/Spring Boot y Frontend en React/Vite.",
        tech: ["Java", "Spring Boot", "React", "ViteJS"],
        link: "https://github.com/AngelGustavoSanchezRodas/TaskFlow.git"
    },
    {
        title: "Proyecto Notas | Gestión Académica",
        description: "Aplicación de escritorio para administración de calificaciones. Interfaz en Java Swing y persistencia en PostgreSQL.",
        tech: ["Java", "Swing", "PostgreSQL"],
        link: "https://github.com/AngelGustavoSanchezRodas/SistemaNotasRefactorizado.git"
    }
];

export const MY_SKILLS = [
    "Java", "SQL", "Python", "JavaScript",
    "Spring Boot", "Hibernate/JPA", "React JS",
    "Docker", "PostgreSQL", "Git"
];