import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Lightbulb, TrendingUp, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useState, useEffect } from 'react';

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImageError(false);
    if (project) {
      document.title = `${project.title} - Landon`;
    }
  }, [slug, project]);

  useEffect(() => {
    setImageError(false);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (project?.detailedContent?.productImages) {
      setCurrentImageIndex((prev) =>
        prev === project.detailedContent.productImages!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.detailedContent?.productImages) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.detailedContent.productImages!.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Work
          </Link>

          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {project.category}
              </span>
              {project.comingSoon && (
                <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              {project.detailedContent?.timeline && (
                <span className="text-sm font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {project.detailedContent.timeline}
                </span>
              )}
            </div>
            <h1 className="text-5xl font-bold text-neutral-900 mb-6">{project.title}</h1>
            <p className="text-xl text-neutral-600 leading-relaxed">{project.description}</p>
          </div>

          <div className="mb-12">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full ${project.id === '8' ? 'h-80' : 'h-96'} object-cover rounded-lg shadow-lg`}
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-sm text-neutral-700 bg-neutral-100 px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.detailedContent && (
            <div className="space-y-8">
              {project.detailedContent.background && (
                <section className="bg-slate-50 rounded-lg p-8 border-l-4 border-slate-900">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-slate-900" />
                    Background
                  </h2>
                  <p className="text-neutral-700 leading-relaxed text-lg">{project.detailedContent.background}</p>
                </section>
              )}

              {project.detailedContent.objective && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    {project.id === '8' ? 'Intent' : 'Objective'}
                  </h2>
                  <p className="text-neutral-700 leading-relaxed text-lg">{project.detailedContent.objective}</p>
                </section>
              )}


              {project.id !== '8' && (project.detailedContent.users || project.detailedContent.collaborators || project.detailedContent.stakeholders) && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-green-600" />
                    Team & Stakeholders
                  </h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {project.detailedContent.users && project.detailedContent.users.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Key Users</h3>
                        <ul className="space-y-2">
                          {project.detailedContent.users.map((user, index) => (
                            <li key={index} className="text-neutral-700 flex items-center gap-2">
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                              {user}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.detailedContent.collaborators && project.detailedContent.collaborators.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Collaborators</h3>
                        <ul className="space-y-2">
                          {project.detailedContent.collaborators.map((collaborator, index) => (
                            <li key={index} className="text-neutral-700 flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                              {collaborator}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.detailedContent.stakeholders && project.detailedContent.stakeholders.length > 0 && (
                      <div>
                        <h3 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Stakeholders</h3>
                        <ul className="space-y-2">
                          {project.detailedContent.stakeholders.map((stakeholder, index) => (
                            <li key={index} className="text-neutral-700 flex items-center gap-2">
                              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                              {stakeholder}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {project.detailedContent.researchPhases && project.detailedContent.researchPhases.length > 0 && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Research Methodology</h2>
                  <div className="space-y-6">
                    {project.detailedContent.researchPhases.map((phase, index) => (
                      <div key={index} className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">{phase.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {phase.methods.map((method, methodIndex) => (
                            <div key={methodIndex} className="text-neutral-700 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                              {method}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.detailedContent.methods && project.detailedContent.methods.length > 0 && !project.detailedContent.researchPhases && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Research Methods</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.detailedContent.methods.map((method, index) => (
                      <div key={index} className="text-neutral-700 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        {method}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.detailedContent.images && project.detailedContent.images.length > 0 && (
                <section className="my-12">
                  <div className="grid md:grid-cols-3 gap-6">
                    {project.detailedContent.images.map((image, index) => (
                      <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.id !== '8' && project.detailedContent.insights && project.detailedContent.insights.length > 0 && (
                <section className="bg-amber-50 rounded-lg p-8 border border-amber-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Key Insights</h2>
                  <ul className="space-y-4">
                    {project.detailedContent.insights.map((insight, index) => (
                      <li key={index} className="text-neutral-800 flex items-start gap-3 leading-relaxed">
                        <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.detailedContent.designPhilosophy && (
                <section className="bg-purple-50 rounded-lg p-8 border border-purple-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Design Philosophy</h2>
                  {typeof project.detailedContent.designPhilosophy === 'string' ? (
                    <p className="text-neutral-800 leading-relaxed text-lg">{project.detailedContent.designPhilosophy}</p>
                  ) : (
                    <ul className="space-y-4">
                      {project.detailedContent.designPhilosophy.map((philosophy, index) => (
                        <li key={index} className="text-neutral-800 flex items-start gap-3 leading-relaxed">
                          <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{philosophy}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              )}


              {project.detailedContent.productThemes && project.detailedContent.productThemes.length > 0 && (
                <section className="bg-slate-50 rounded-lg p-8 border-l-4 border-slate-900">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Product Themes</h2>
                  <div className="space-y-6">
                    {project.detailedContent.productThemes.map((theme, index) => (
                      <div key={index} className="bg-white p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{theme.name}</h3>
                        <p className="text-neutral-700 leading-relaxed">{theme.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.detailedContent.productImages && project.detailedContent.productImages.length > 0 && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-6">Product Gallery</h2>
                  <div className="relative">
                    <div className="aspect-square md:aspect-[16/9] overflow-hidden rounded-lg bg-neutral-100 flex items-center justify-center">
                      {imageError ? (
                        <div className="text-center p-8">
                          <p className="text-neutral-600 mb-4">Image temporarily unavailable</p>
                          <a
                            href={project.detailedContent.productImages[currentImageIndex]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 underline"
                          >
                            View on Etsy
                          </a>
                        </div>
                      ) : (
                        <img
                          src={project.detailedContent.productImages[currentImageIndex]}
                          alt={`Product ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            console.error('Image failed to load:', project.detailedContent.productImages?.[currentImageIndex]);
                            setImageError(true);
                          }}
                          crossOrigin="anonymous"
                        />
                      )}
                    </div>

                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-neutral-900" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-neutral-900" />
                    </button>

                    <div className="flex justify-center gap-2 mt-4">
                      {project.detailedContent.productImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-neutral-900 w-8'
                              : 'bg-neutral-300 hover:bg-neutral-400'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {project.detailedContent.productOfferings && project.detailedContent.productOfferings.length > 0 && !project.detailedContent.productImages && (
                <section className="bg-slate-50 rounded-lg p-8 border-l-4 border-slate-900">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Product Offerings</h2>
                  <ul className="space-y-3">
                    {project.detailedContent.productOfferings.map((offering, index) => (
                      <li key={index} className="text-neutral-700 flex items-start gap-3 leading-relaxed">
                        <span className="w-2 h-2 bg-slate-900 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.detailedContent.findings && project.detailedContent.findings.length > 0 && (
                <section className="bg-white rounded-lg p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">Research Findings</h2>
                  <ul className="space-y-4">
                    {project.detailedContent.findings.map((finding, index) => (
                      <li key={index} className="text-neutral-700 flex items-start gap-3 leading-relaxed">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.id !== '8' && project.detailedContent.outcomes && project.detailedContent.outcomes.length > 0 && (
                <section className="bg-green-50 rounded-lg p-8 border border-green-100">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Outcomes & Impact
                  </h2>
                  <ul className="space-y-4">
                    {project.detailedContent.outcomes.map((outcome, index) => (
                      <li key={index} className="text-neutral-800 flex items-start gap-3 leading-relaxed">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.detailedContent.status && (
                <section className="bg-slate-900 text-white rounded-lg p-8">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6" />
                    Current Status
                  </h2>
                  <p className="leading-relaxed text-slate-100 text-lg">{project.detailedContent.status}</p>
                  {project.detailedContent.website && (
                    <div className="mt-6">
                      <a
                        href={`http://${project.detailedContent.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </section>
              )}
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
