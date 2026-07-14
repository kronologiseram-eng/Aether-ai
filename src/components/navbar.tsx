'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-white">Aether AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-4">
            <a
              href="#features"
              className="block text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="block text-sm text-gray-300 hover:text-white transition-colors duration-300"
            >
              FAQ
            </a>
            <button className="w-full px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
