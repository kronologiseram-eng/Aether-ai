'use client';

import {
  Brain,
  Zap,
  Shield,
  BarChart3,
  Code2,
  Workflow,
} from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
  rowSpan: string;
}

const features: Feature[] = [
  {
    id: '1',
    title: 'Advanced Neural Processing',
    description: 'Leverage cutting-edge deep learning models for unparalleled accuracy and performance.',
    icon: <Brain className="h-8 w-8 text-purple-400" />,
    colSpan: 'md:col-span-2',
    rowSpan: 'md:row-span-2',
  },
  {
    id: '2',
    title: 'Lightning Fast',
    description: 'Sub-millisecond response times with optimized infrastructure.',
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: '3',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC 2 & GDPR standards.',
    icon: <Shield className="h-8 w-8 text-blue-400" />,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: '4',
    title: 'Real-Time Analytics',
    description: 'Comprehensive dashboards and insights into AI model behavior.',
    icon: <BarChart3 className="h-8 w-8 text-green-400" />,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: '5',
    title: 'Developer Friendly',
    description: 'Simple REST APIs and extensive documentation for seamless integration.',
    icon: <Code2 className="h-8 w-8 text-pink-400" />,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    id: '6',
    title: 'Workflow Automation',
    description: 'Automate complex business processes with intelligent automation.',
    icon: <Workflow className="h-8 w-8 text-cyan-400" />,
    colSpan: 'md:col-span-2',
    rowSpan: 'row-span-1',
  },
];

export function BentoGrid() {
  return (
    <section id="features" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Experience the future of artificial intelligence with our comprehensive suite of tools and capabilities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.colSpan} ${feature.rowSpan} group`}
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10 overflow-hidden cursor-pointer">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 p-3 w-fit rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
