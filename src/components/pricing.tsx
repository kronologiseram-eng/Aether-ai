'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      'Up to 10,000 API calls/month',
      'Basic AI models',
      'Email support',
      'Single user account',
      'Standard rate limiting',
      '30-day data retention',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      'Up to 100,000 API calls/month',
      'Advanced AI models',
      'Priority email & chat support',
      'Up to 5 team members',
      'Custom rate limiting',
      '90-day data retention',
      'Advanced analytics',
      'Custom integrations',
    ],
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large-scale deployments',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      'Unlimited API calls',
      'All AI models + custom training',
      '24/7 phone & dedicated support',
      'Unlimited team members',
      'Advanced rate limiting controls',
      'Unlimited data retention',
      'Real-time analytics & reporting',
      'White-label options',
      'SLA guarantees',
      'Custom infrastructure',
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your needs. Always flexible to scale as you grow.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${
              !isYearly ? 'text-white' : 'text-gray-400'
            }`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-7 w-7 transform rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors duration-300 ${
              isYearly ? 'text-white' : 'text-gray-400'
            }`}>
              Yearly
              <span className="ml-2 inline-block px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-semibold">
                Save 17%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl transition-all duration-300 ${
                plan.isPopular
                  ? 'ring-2 ring-purple-500/50 lg:scale-105'
                  : 'border border-white/10'
              } p-8 flex flex-col h-full group`}
            >
              {/* Background */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02]" />

              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-purple-500 text-white text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-400">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-xs text-gray-500 mt-2">
                      ${Math.round((plan.yearlyPrice / 12) * 100) / 100}/month billed annually
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                      : 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40'
                  }`}
                >
                  Get Started
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-sm mt-16">
          All plans include 30-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
