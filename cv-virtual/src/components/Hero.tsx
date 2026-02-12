import { MY_PROFILE } from '../data/myProfile';

export const Hero = () => {
    return (
        <section className="max-w-4xl mx-auto pt-20 pb-10 px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Espacio para tu foto */}
                <div className="flex justify-center md:justify-start mt-10">
                    <img
                        src="/Foto%20CV%20web.jpg"
                        alt="Angel Rodas"
                        className="w-48 h-48 rounded-xl object-cover grayscale hover:grayscale-0 transition-all border-2 border-dark-border p-2 bg-dark-card"
                    />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Hola, soy <span className="text-blue-400">{MY_PROFILE.name}</span>
                    </h1>
                    <p className="text-xl text-gray-400 mt-2">
                        {MY_PROFILE.position}
                    </p>
                </div>
            </div>

            {/* Bloque "Quién soy" estilo código */}
            <div className="mt-12 p-6 bg-dark-card border border-dark-border rounded-lg font-mono text-sm shadow-xl">
                <p className="text-gray-500">// Quién soy y lo que hago</p>
                <p className="mt-2 text-blue-300">const <span className="text-purple-400">aboutMe</span> = {'{'}</p>
                <p className="ml-4 text-gray-300">
                    description: <span className="text-green-300">"{MY_PROFILE.aboutMe}"</span>
                </p>
                <p className="text-blue-300">{'}'};</p>
            </div>
        </section>
    );
};