import React from 'react';
import { Play, Sparkles, Cloud, Clock } from 'lucide-react';

const VISTALanding = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-gray-950 animate-gradient" />
        </div>
        
        {/* Navegación */}
        <nav className="absolute top-8 w-full px-8 flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors">VISTA</a>
          <a href="#" className="px-6 py-2 rounded-full border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white transition-colors">
            Acceder
          </a>
        </nav>
        
        {/* Logo Animado */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-32">
          <div className="relative w-full h-full animate-pulse">
            <div className="absolute inset-0 border-2 border-indigo-400 rounded-full" />
            <div className="absolute inset-[25%] border-2 border-indigo-400 rounded-full" />
            <div className="absolute inset-[40%] border-2 border-indigo-400 rounded-full" />
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="container mx-auto px-6 relative z-10 text-center mt-24">
          <h1 className="text-8xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            VISTA
          </h1>
          <p className="text-3xl mb-8 text-gray-300">
            Crea historias sin límites
          </p>
          <p className="text-xl mb-12 text-gray-400">
            60% menos tiempo editando. 100% más creatividad.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
            Descubre VISTA
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto mt-2 animate-bounce"/>
          </div>
        </div>
      </header>

      {/* Demo Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden relative group">
              <img 
                src="/api/placeholder/1920/1080" 
                alt="VISTA Demo"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <button className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-all transform hover:scale-110">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            La magia está en la simplicidad
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Clock className="w-8 h-8" />}
              title="Edición Instantánea"
              description="Marca los momentos importantes mientras ves tu video, sin interrupciones."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Gestos Intuitivos"
              description="Edita con movimientos naturales que se adaptan a tu estilo."
            />
            <FeatureCard
              icon={<Cloud className="w-8 h-8" />}
              title="Todo en la Nube"
              description="Accede a tus proyectos desde cualquier lugar, sin preocupaciones."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-12">
                Tan simple como respirar
              </h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-xl text-gray-300 group-hover:text-white transition-colors">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl transform hover:scale-105 transition-transform">
              <VideoPreview />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">
            El futuro te espera
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Sé parte de la revolución en la edición de video
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105">
            Descubre VISTA
          </button>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">&copy; 2024 VISTA</p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-all hover:scale-105 group">
    <div className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-400 transition-colors">{title}</h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
  </div>
);

const VideoPreview = () => (
  <div className="space-y-4">
    <div className="h-12 bg-gray-700 rounded-lg animate-pulse" />
    <div className="grid grid-cols-3 gap-4">
      <div className="h-24 bg-gray-700 rounded-lg animate-pulse" />
      <div className="h-24 bg-gray-700 rounded-lg animate-pulse" />
      <div className="h-24 bg-gray-700 rounded-lg animate-pulse" />
    </div>
    <div className="h-8 bg-gray-700 rounded-lg w-3/4 animate-pulse" />
  </div>
);

const steps = [
  "Graba o importa tu video",
  "Marca los momentos importantes con gestos mientras lo ves",
  "VISTA se encarga del resto automáticamente"
];

export default VISTALanding;
