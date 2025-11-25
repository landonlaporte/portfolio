import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';
import { profile, skills } from '../data/portfolio';

export default function About() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  const highlights = [
    { icon: Award, text: '10+ years of UX research experience', color: 'text-blue-600' },
    { icon: Users, text: 'Led teams in User Experience, Client Experience, Marketing, and Human Resources', color: 'text-green-600' },
    { icon: TrendingUp, text: 'Driven measurable product, client, and user experience improvements', color: 'text-orange-600' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Transforming user insights into strategic product decisions through rigorous research and leadership.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Approach</h3>
            {profile.expertise.map((item, index) => (
              <div key={index} className="flex gap-4 items-start group">
                <div className="mt-1 flex-shrink-0">
                  <CheckCircle2 className="text-slate-900 group-hover:text-green-600 transition-colors" size={24} />
                </div>
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Impact Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`${highlight.color}`}>
                      <Icon size={32} />
                    </div>
                    <p className="text-slate-700 font-medium">{highlight.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <div key={category} className="space-y-3">
                <h4 className="font-bold text-slate-900 text-lg mb-4 pb-2 border-b-2 border-slate-900">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="text-slate-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
