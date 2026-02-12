import { MY_PROFILE } from '../data/myProfile';

export const ActionButtons = () => {
    return (
        <div className="flex flex-wrap gap-4 mt-10">
            {/* Botón Descargar CV */}
            <a
                href={MY_PROFILE.contact.cvPdf}
                download="CV_Angel_Rodas.pdf"
                className="flex items-center gap-2 px-5 py-2 bg-code-purple/10 border border-code-purple/50 rounded-md hover:bg-code-purple/20 transition-all text-code-purple font-mono text-sm group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
                download_cv()
            </a>

            {/* Botón Ver Certificados */}
            <a
                href={MY_PROFILE.contact.certificates}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 bg-code-blue/10 border border-code-blue/50 rounded-md hover:bg-code-blue/20 transition-all text-code-blue font-mono text-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                view_certifications()
            </a>
        </div>
    );
};