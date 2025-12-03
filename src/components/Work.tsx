import { useState } from 'react';
import { projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';

export default function Work() {
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of research projects demonstrating strategic impact and user-centered methodologies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
