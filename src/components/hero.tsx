'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 hover:bg-white/10 transition-all duration-300">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-xs sm:text-sm text-gray-300">
            Introducing Aether AI - The Future of Intelligence
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Intelligent Systems</span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Reimagined for Tomorrow
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Harness the power of advanced AI to automate, optimize, and transform your business operations with unprecedented intelligence and speed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative flex items-center space-x-2">
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold text-base hover:bg-white/5 hover:border-white/40 transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="text-sm text-gray-500 space-y-2">
          <p>✓ No credit card required • 30-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
}
