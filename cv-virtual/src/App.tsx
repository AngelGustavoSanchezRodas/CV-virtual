import { Hero } from './components/Hero';
import { ContactButtons } from './components/ContactButtons.tsx';
import { ActionButtons } from './components/ActionButtons';
import {MY_EDUCATION, MY_PROJECTS, MY_SKILLS} from './data/myProfile';

function App() {
    return (
        <main className="min-h-screen bg-dark-bg text-gray-200 selection:bg-code-blue/30 pb-20">

            {/* 1. HERO (Nombre, Puesto y Foto al final como pediste) */}
            <Hero />

            <div className="max-w-4xl mx-auto px-6 space-y-20">

                <ActionButtons />

                {/* 2. HABILIDADES (Extraídas del PDF) */}
                <section>
                    <h2 className="text-xl font-mono text-code-purple mb-6">{`// Habilidades Técnicas`}</h2>
                    <div className="flex flex-wrap gap-3">
                        {MY_SKILLS.map(skill => (
                            <span key={skill} className="px-3 py-1 bg-dark-card border border-dark-border rounded text-sm text-code-blue">
                {skill}
              </span>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-mono text-code-purple mb-6">{`// Educación`}</h2>
                    {MY_EDUCATION.map((edu, index) => (
                        <div key={index} className="border-l-2 border-dark-border pl-4">
                            <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                            <p className="text-code-blue text-sm">{edu.degree}</p>
                            <p className="text-gray-500 text-xs mt-1">{edu.period}</p>
                        </div>
                    ))}
                </section>

                {/* 3. TRABAJOS / PROYECTOS (El "Tren" de proyectos) */}
                <section>
                    <h2 className="text-xl font-mono text-code-purple mb-8">{`// Mis Trabajos`}</h2>
                    <div className="grid gap-6">
                        {MY_PROJECTS.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 bg-dark-card border border-dark-border rounded-lg hover:border-code-blue/50 hover:bg-dark-card/80 transition-all cursor-pointer relative overflow-hidden"
                            >
                                {/* Decoración de "Click para ver repo" que aparece en hover */}
                                <div className="absolute top-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-code-blue font-mono">
                                    view_repository()
                                </div>

                                <h3 className="text-lg font-bold text-white group-hover:text-code-blue transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 my-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] px-2 py-0.5 rounded border border-dark-border bg-dark-bg text-gray-500 font-mono">
              {`#${t}`}
            </span>
                                    ))}
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* 4. CONTACTO (Con los botones funcionales) */}
                <section id="contacto">
                    <h2 className="text-xl font-mono text-code-purple mb-6">{`// Contacto`}</h2>
                    <ContactButtons />
                </section>

            </div>
        </main>
    );
}

export default App;