import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const services = [
    {
      title: 'Air Conditioning Services',
      description: 'Installation and maintenance of energy-efficient split-system air conditioning for residential and commercial spaces.',
      icon: '/images/air_conditioning_icon_1769614960556.png',
      href: '/electrical-services-in-nw2/air-conditioning-services',
    },
    {
      title: 'EV Charger Installation',
      description: 'Professional home EV charging port installation with safe, future-proofed charging solutions.',
      icon: '/images/ev_charging_icon_1769615095568.png',
      href: '/electrical-services-in-nw2/electric-vehicle-installation',
    },
    {
      title: 'Electrical Safety Certificates',
      description: 'Comprehensive EICR inspections for landlords, homebuyers, and businesses to ensure BS 7671 compliance.',
      icon: '/images/safety_certificate_icon_1769615156599.png',
      href: '/electrical-services-in-nw2/electrical-safety-certificates',
    },
    {
      title: 'Outdoor Lighting & Heating',
      description: 'Weatherproof electrical installations including aesthetic security lighting and infrared outdoor heating.',
      icon: '/images/outdoor_lighting_icon_1769615222026.png',
      href: '/electrical-services-in-nw2/outdoor-lighting-and-heating',
    },
    {
      title: 'PAT Testing',
      description: 'Portable Appliance Testing for workplaces and rental properties, combining visual and electrical tests.',
      icon: '/images/pat_testing_icon_1769615251638.png',
      href: '/electrical-services-in-nw2/pat-testing',
    },
    {
      title: 'Flood Damage Assessment',
      description: 'Critical post-flood safety inspections and electrical system restoration services.',
      icon: '/images/flood_damage_icon_1769615332478.png',
      href: '/electrical-services-in-nw2/flood-damage-electrical-assessment',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gradient" style={{ fontFamily: 'var(--font-poppins)' }}>
                Expert Electrical Services in 
                North West London
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Good honest reliable electrician based in Cricklewood, NW2. Fully qualified (18th edition) and Part P certified. 
                Trusted by homeowners and businesses across North West London.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">NAPIT Approved</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Which? Trusted Trader</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <svg className="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">Part P Certified</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center">
                <a href="tel:07825447057" className="btn btn-primary text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: tel:078 25490 7077
                </a>
              
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl slide-in-right">
              <Image
                src="/images/hero_electrician_1769615393352.png"
                alt="Professional electrician working on electrical panel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive domestic and commercial electrical solutions across North West London. 
              From routine installations to emergency repairs, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-lg bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
              Serving North West London
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Cricklewood (NW2), we provide reliable electrical services throughout the local area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {['Cricklewood', 'Willesden Green', 'Kilburn', 'Dollis Hill', 'Mapesbury', 'Hampstead', 'West Hampstead', 'NW2 Area'].map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <svg className="w-6 h-6 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium text-gray-900">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="section-lg bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-poppins)' }}>
            Need an Electrician?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get in touch today for a free quote or emergency electrical services. 
            We're here to help with all your electrical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07825447057" className="btn bg-white text-primary hover:bg-gray-100 text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              078 2544 7057
            </a>
            <a href="mailto:hello@electricjames.com" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
