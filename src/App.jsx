import React, { useState } from 'react';
import { Play, Circle, Settings, Download, ChevronRight, Heart, MessageCircle, Share2 } from 'lucide-react';

const VISTALanding = () => {
  const [selectedTab, setSelectedTab] = useState('trending');

  const mockVideos = [
    { id: 1, title: "Amanecer en la ciudad", author: "@cityscape", likes: "2.4k", comments: "148" },
    { id: 2, title: "Tutorial de danza", author: "@dancepro", likes: "1.8k", comments: "95" },
    { id: 3, title: "Recetas rápidas", author: "@quickfood", likes: "3.1k", comments: "203" },
    { id: 4, title: "Viaje por Asia", author: "@traveler", likes: "4.2k", comments: "256" },
    { id: 5, title: "Tips de fotografía", author: "@photopro", likes: "1.5k", comments: "87" },
    { id: 6, title: "Rutina de ejercicios", author: "@fitness", likes: "2.9k", comments: "167" }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section con Logo Minimalista */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950" />
        
        {/* Logo Minimalista */}
        <div className="absolute w-32 h-32">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-indigo-400 rounded-full" />
            <div className="absolute inset-[25%] border border-indigo-400 rounded-full" />
            <div className="absolute inset-2/4 bg-indigo-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" 
                 style={{ width: '4px', height: '4px' }} />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 text-center mt-48">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            VISTA
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Edición de video reinventada
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Comenzar ahora
          </button>
        </div>
      </header>

      {/* Video Demo Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Mira VISTA en acción
          </h2>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder para el video demo */}
            <div className="aspect-video bg-gray-800 relative">
              <img 
                src="/api/placeholder/1920/1080" 
                alt="VISTA Demo Video"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <button className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition-colors">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Circle className="w-8 h-8" />}
              title="Captura Intuitiva"
              description="Graba y edita con gestos naturales, sin interrumpir tu flujo creativo."
            />
            <FeatureCard
              icon={<Settings className="w-8 h-8" />}
              title="Edición Inteligente"
              description="La IA aprende tu estilo y sugiere los mejores cortes."
            />
            <FeatureCard
              icon={<Download className="w-8 h-8" />}
              title="Exportación Rápida"
              description="Comparte tu visión en cualquier plataforma con un solo toque."
            />
          </div>
        </div>
      </section>

      {/* Public Content Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Descubre</h2>
            <div className="flex gap-4">
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedTab === 'trending' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedTab('trending')}
              >
                Tendencias
              </button>
              <button 
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedTab === 'recent' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
                onClick={() => setSelectedTab('recent')}
              >
                Recientes
              </button>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockVideos.map((video) => (
              <div key={video.id} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/30 transition-all hover:scale-[1.02]">
                <div className="aspect-video bg-gray-800 relative group">
                  <img 
                    src={`/api/placeholder/640/360?text=Video+${video.id}`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{video.author}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{video.comments}</span>
                    </div>
                    <div className="ml-auto">
                      <Share2 className="w-4 h-4 hover:text-indigo-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-indigo-400 mb-2">500K+</div>
              <div className="text-gray-400">Creadores activos</div>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-indigo-400 mb-2">2M+</div>
              <div className="text-gray-400">Videos compartidos</div>
            </div>
            <div className="text-center p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-indigo-400 mb-2">10M+</div>
              <div className="text-gray-400">Visualizaciones</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Interface Preview */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Diseñado para Creadores
              </h2>
              <ul className="space-y-4">
                {[
                  'Interfaz minimalista y potente',
                  'Gestos intuitivos para edición',
                  'Procesamiento local para máxima privacidad',
                  'Exportación en múltiples formatos'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChevronRight className="w-5 h-5 text-indigo-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Interface Preview */}
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
              <div className="space-y-4">
                <div className="h-12 bg-gray-800 rounded-lg" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 bg-gray-800 rounded-lg" />
                  <div className="h-24 bg-gray-800 rounded-lg" />
                  <div className="h-24 bg-gray-800 rounded-lg" />
                </div>
                <div className="h-8 bg-gray-800 rounded-lg w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 VISTA. Reimaginando la edición de video.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-indigo-500/30 transition-colors">
      <div className="text-indigo-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default VISTALanding;
