'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is Aether AI and how does it work?',
    answer:
      'Aether AI is an advanced artificial intelligence platform that combines deep learning, natural language processing, and machine learning to help businesses automate and optimize their operations. Our system learns from your data and continuously improves over time.',
  },
  {
    id: '2',
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, absolutely! You can cancel your subscription at any time without any penalties or hidden fees. If you cancel before the end of your billing cycle, you\'ll have access until that date.',
  },
  {
    id: '3',
    question: 'Is there a free trial available?',
    answer:
      'Yes, we offer a 30-day free trial for all plans. No credit card is required to start. You\'ll have full access to all features during the trial period.',
  },
  {
    id: '4',
    question: 'How secure is my data?',
    answer:
      'Security is our top priority. We use bank-grade encryption (AES-256) for data in transit and at rest. All data centers are SOC 2 Type II certified and GDPR compliant. We never share your data with third parties.',
  },
  {
    id: '5',
    question: 'What kind of support do you offer?',
    answer:
      'We offer different levels of support based on your plan. Starter plans get email support, Professional plans get priority email and chat support, and Enterprise plans get 24/7 phone support with a dedicated account manager.',
  },
  {
    id: '6',
    question: 'Can I integrate Aether AI with my existing tools?',
    answer:
      'Yes! Aether AI provides comprehensive REST APIs and webhooks. We also offer pre-built integrations with popular tools like Slack, Zapier, and custom webhook support for direct integrations.',
  },
  {
    id: '7',
    question: 'How do I get started?',
    answer:
      'Getting started is easy! Simply click "Start Free Trial", create an account, and you\'ll have immediate access to our platform. Our onboarding guide will walk you through setup and best practices.',
  },
  {
    id: '8',
    question: 'What happens if I exceed my API call limits?',
    answer:
      'If you exceed your plan\'s API call limits, we\'ll notify you and give you the option to upgrade or purchase additional credits. We never suddenly cut off your access.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Find answers to common questions about Aether AI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="group border border-white/10 rounded-lg hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleOpen(item.id)}
                className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-left text-base sm:text-lg font-semibold text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-purple-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openId === item.id && (
                <div className="px-6 py-4 sm:px-8 sm:py-5 border-t border-white/10 bg-white/[0.03]">
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Our support team is here to help. Contact us anytime.
          </p>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
