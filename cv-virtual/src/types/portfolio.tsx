export interface Contact {
    email: string;
    phone: string;
    linkedIn: string;
    github: string;
    certificates: string;
    cvPdf: string;
}

export interface My_Education {
    school: string;
    degree: string;
    period: string;
}

export interface UserProfile {
    name: string;
    position: string;
    aboutMe: string;
    contact: Contact;
}

export interface Project {
    title: string;
    description: string;
    tech: string [];
    link: string;
}