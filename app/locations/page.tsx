
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Areas We Cover | Electrician Services in London | Electric James',
  description: 'Expert electrical services available across London. Check our service areas including NW2, Willesden, Cricklewood, and surrounding locations.',
};

export default function LocationsPage() {
  const areas = [
    'Willesden (NW2)',
    'Cricklewood (NW2)',
    'Dollis Hill (NW2)',
    'Neasden (NW2)',
    'Kilburn (NW6)',
    'West Hampstead (NW6)',
    'Golders Green (NW11)',
    'Hampstead (NW3)',
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-semibold tracking-wider uppercase mb-4">
            Service Areas
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display">
            Areas We Cover
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Electric James provides professional electrical services across North West London and surrounding areas.
          </p>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {areas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mr-4 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see your area?</h2>
              <p className="text-gray-600 mb-6">
                We often cover surrounding areas. Give us a call to check if we can help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:07825447057" className="btn btn-primary">
                  Call 078 2544 7057
                </a>
                <Link href="/#contact" className="btn bg-white text-gray-900 border border-gray-200 hover:bg-gray-50">
                  Contact Us Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
