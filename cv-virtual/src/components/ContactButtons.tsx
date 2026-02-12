export const ContactButtons = () => {
    const email = "sangelgustavocom@gmail.com";
    const phone = "50258463811";
    const defaultMessage = encodeURIComponent("Hola Angel, vi tu CV virtual y me gustaría contactar contigo.");

    return (
        <div className="flex flex-wrap gap-4 mt-8">
            {/* Botón de Email */}
            <a
                href={`mailto:${email}?subject=Contacto&body=${defaultMessage}`}
                className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-md hover:border-code-blue transition-all group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-code-blue">
                    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>Enviar Email</span>
            </a>

            {/* Botón de WhatsApp */}
            <a
                href={`https://wa.me/${phone}?text=${defaultMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-md hover:border-green-400 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                <span>WhatsApp</span>
            </a>
        </div>
    );
};