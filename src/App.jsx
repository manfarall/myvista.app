import React, { useState } from 'react';
import { Play, Sparkles, Clock, Users, ChevronRight, Cloud, Star, MessageCircle } from 'lucide-react';

const VISTALanding = () => {
  const [feedbackForm, setFeedbackForm] = useState({ email: '', comment: '' });
  
  return (
    <div className="min-h-screen bg-gray-950 text-white font-['Space_Grotesk']">
      {/* Hero Section con Logo Vintage */}
      <header className="min-h-screen flex items-center justify-center relative py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-32">
            <div className="space-y-12">
              <h1 className="text-8xl font-bold tracking-tight">
                VIS<span className="relative">T</span>A
              </h1>
              
              <div className="space-y-6">
                <h2 className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Magical Editing
                </h2>
                <p className="text-3xl text-gray-300">
                  Como si tu mente controlara el editor
                </p>
              </div>
            </div>

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-800 bg-black/40 backdrop-blur-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-8">
                  <div className="relative">
                    <div className="animate-ping absolute inset-0 bg-purple-500/20 rounded-full"></div>
                    <button className="relative p-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                      <Play className="w-16 h-16" />
                    </button>
                  </div>
                  <p className="text-xl text-gray-300">Watch the magic happen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Value Proposition - 60% Time Saving */}
      <section className="py-40 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-24">
            <div className="space-y-12">
              <h3 className="text-6xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  60% Less Time Editing
                </span>
              </h3>
              <p className="text-2xl text-gray-300">
                Más tiempo para crear, menos tiempo editando
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              <div className="space-y-6">
                <Clock className="w-12 h-12 text-blue-400 mx-auto" />
                <h4 className="text-2xl font-bold">Edición Instantánea</h4>
                <p className="text-gray-300">Corta y ajusta con gestos naturales</p>
              </div>
              <div className="space-y-6">
                <Sparkles className="w-12 h-12 text-purple-400 mx-auto" />
                <h4 className="text-2xl font-bold">Control por Gestos</h4>
                <p className="text-gray-300">Tan intuitivo como mover tus manos</p>
              </div>
              <div className="space-y-6">
                <Cloud className="w-12 h-12 text-pink-400 mx-auto" />
                <h4 className="text-2xl font-bold">Cloud Power</h4>
                <p className="text-gray-300">Accede desde cualquier lugar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Tools & Community */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-40">
            {/* Tools Section */}
            <div className="space-y-24 text-center">
              <h3 className="text-5xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tools for Creators
                </span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8 text-left">
                  <h4 className="text-3xl font-bold">Personal Space</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Espacios privados y públicos
                    </li>
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Sin reconocimiento facial
                    </li>
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Códigos personalizados
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-8 text-left">
                  <h4 className="text-3xl font-bold">Creator Studio</h4>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Generador de contenido customizable
                    </li>
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Tutoriales en vivo con expertos
                    </li>
                    <li className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-purple-400" />
                      Rewards por creaciones
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Community Metrics */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-4">500K+</div>
                <p className="text-gray-300">Active Creators</p>
              </div>
              <div className="p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-4">60%</div>
                <p className="text-gray-300">Time Saved</p>
              </div>
              <div className="p-8 rounded-xl bg-black/40 backdrop-blur-xl border border-gray-800 text-center">
                <div className="text-4xl font-bold text-pink-400 mb-4">2M+</div>
                <p className="text-gray-300">Videos Created</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-40 bg-black/40 backdrop-blur-xl">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-4xl font-bold">Share Your Thoughts</h3>
              <p className="text-gray-300">Help us shape the future of video editing</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-300">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg focus:border-purple-500 transition"
                  value={feedbackForm.email}
                  onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-gray-300">Your feedback</label>
                <textarea 
                  className="w-full px-4 py-3 bg-black/40 border border-gray-800 rounded-lg focus:border-purple-500 transition"
                  rows={4}
                  value={feedbackForm.comment}
                  onChange={(e) => setFeedbackForm({...feedbackForm, comment: e.target.value})}
                />
              </div>
              <button className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:opacity-90 transition">
                Send Feedback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-12">
            <h3 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Start Creating Magic
              </span>
            </h3>
            <p className="text-xl text-gray-300">
              No necesitas ser un experto, solo necesitas ser TÚ
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-lg font-semibold hover:opacity-90 transition">
              Join the revolution - It's free
            </button>
            <p className="text-sm text-gray-400">No rules, but be you</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VISTALanding;
