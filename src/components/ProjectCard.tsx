import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block"
      style={{
        animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {project.comingSoon && (
          <div className="absolute top-4 right-4 bg-slate-900 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
            <Clock size={14} />
            Coming Soon
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <span className="text-sm font-medium text-slate-500">{project.category}</span>
          <h3 className="text-2xl font-bold text-slate-900 mt-1 mb-3">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
