import { Heart, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
            <p className="text-slate-400">{profile.title}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="https://www.linkedin.com/in/landon-laporte/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
            <p className="text-slate-400">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              Built with <Heart size={16} className="text-red-500" /> and purpose
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
