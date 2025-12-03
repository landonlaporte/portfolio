import { ArrowDown, Download } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 tracking-tight">
            Research with Purpose
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {profile.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToWork}
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="/LandonLaPorte_2025.docx"
              download
              className="px-8 py-4 border-2 border-slate-900 text-slate-900 font-medium rounded-lg hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer text-slate-400 hover:text-slate-900 transition-colors"
        aria-label="Scroll to work section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
