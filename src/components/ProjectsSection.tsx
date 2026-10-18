import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'web') return proj.categoryTag.includes('E-Commerce') || proj.categoryTag.includes('Web App') || proj.categoryTag.includes('Media');
    if (filter === 'networking') return proj.categoryTag.includes('Networking') || proj.categoryTag.includes('Healthcare');
    return true;
  });

  return (
    <section id="projects" className="w-full bg-[#F4F4F6] text-slate-900 py-24 sm:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-200/70 border border-slate-300 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DE4A20]" />
              PORTFOLIO
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-slate-900 uppercase leading-[0.95]">
              OUR <br />
              <span className="text-slate-400">PROJECTS.</span>
            </h2>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls) */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-lg shadow-sm self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'web'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Web & Apps
            </button>
            <button
              onClick={() => setFilter('networking')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                filter === 'networking'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Networking & Systems
            </button>
          </div>
        </div>

        {/* 2-Column Staggered Grid Layout (matching video 00:15 - 00:18) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // Give even cards a staggered top margin on desktop for the dynamic editorial rhythm
            const isStaggered = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`group flex flex-col ${isStaggered ? 'md:mt-12' : ''}`}
              >
                {/* Image Container Card */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-white font-mono text-xs border border-white/10">
                      {project.categoryTag}
                    </span>
                  </div>

                  {/* Hover Action Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="space-y-1">
                      <p className="text-[11px] font-mono text-[#FFA675] uppercase tracking-wider">
                        {project.category}
                      </p>
                      <h3 className="font-display font-black text-xl sm:text-2xl tracking-tight leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View GitHub Repository"
                          className="w-9 h-9 rounded-lg bg-black/60 hover:bg-[#DE4A20] text-white flex items-center justify-center transition-colors border border-white/10"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open Live Preview"
                        className="w-9 h-9 rounded-lg bg-[#DE4A20] hover:bg-[#C23A14] text-white flex items-center justify-center transition-colors shadow-md"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Metadata & Description */}
                <div className="mt-4 px-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-[#DE4A20]" />
                      <span className="font-display font-bold text-base text-slate-900 group-hover:text-[#DE4A20] transition-colors">
                        {project.title}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">
                      {project.categoryTag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom "ALL PROJECTS" Button (matching video 00:18 - 00:19) */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex justify-center">
          <a
            href="https://github.com/raihanns143?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#DE4A20] transition-all shadow-md"
          >
            <span>EXPLORE ALL REPOSITORIES ON GITHUB</span>
            <div className="w-6 h-6 rounded bg-[#DE4A20] group-hover:bg-white group-hover:text-[#DE4A20] text-white flex items-center justify-center transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
