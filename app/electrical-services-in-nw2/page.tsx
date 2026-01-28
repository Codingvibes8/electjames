import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Electrical Services in NW2 London | Electric James',
  description: 'Comprehensive electrical services in North West London including air conditioning, EV charging, EICR certificates, outdoor lighting, PAT testing, and flood damage assessment. NAPIT approved electrician.',
  keywords: 'electrical services NW2, electrician Cricklewood, North West London electrical services, NAPIT electrician, Part P certified',
};

export default function ElectricalServicesPage() {
  const services = [
    {
      title: 'Air Conditioning Services',
      description: 'Installation and maintenance of energy-efficient split-system air conditioning for residential and commercial spaces. F-Gas compliant installations.',
      icon: '/images/air_conditioning_icon_1769614960556.png',
      href: '/electrical-services-in-nw2/air-conditioning-services',
    },
    {
      title: 'EV Charger Installation',
      description: 'Professional home EV charging port installation with safe, future-proofed charging solutions. Expert advice on charger types and installation.',
      icon: '/images/ev_charging_icon_1769615095568.png',
      href: '/electrical-services-in-nw2/electric-vehicle-installation',
    },
    {
      title: 'Electrical Safety Certificates (EICR)',
      description: 'Comprehensive EICR inspections for landlords, homebuyers, and businesses. Ensure your electrical installations meet BS 7671 safety standards.',
      icon: '/images/safety_certificate_icon_1769615156599.png',
      href: '/electrical-services-in-nw2/electrical-safety-certificates',
    },
    {
      title: 'Outdoor Lighting & Heating',
      description: 'Weatherproof electrical installations for gardens and patios. Aesthetic security lighting and infrared outdoor heating solutions.',
      icon: '/images/outdoor_lighting_icon_1769615222026.png',
      href: '/electrical-services-in-nw2/outdoor-lighting-and-heating',
    },
    {
      title: 'PAT Testing',
      description: 'Portable Appliance Testing for workplaces and rental properties. Visual inspections and electrical tests for all plug-in equipment.',
      icon: '/images/pat_testing_icon_1769615251638.png',
      href: '/electrical-services-in-nw2/pat-testing',
    },
    {
      title: 'Flood Damage Assessment',
      description: 'Critical post-flood safety inspections and electrical system restoration. EICR assessments required before restoring power.',
      icon: '/images/flood_damage_icon_1769615332478.png',
      href: '/electrical-services-in-nw2/flood-damage-electrical-assessment',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
              Professional Electrical Services in <span className="text-primary">NW2 London</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Trusted, reliable electrician based in Cricklewood, NW2. Fully qualified (18th edition) and Part P certified. 
              We provide comprehensive domestic and commercial electrical solutions across North West London.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
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
                <span className="font-semibold">18th Edition Qualified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine installations to emergency repairs, we provide a complete range of electrical services 
              for homes and businesses across North West London.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
            Need Help with Your Electrical Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote or emergency electrical services. 
            We're available 24/7 for urgent electrical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:07825447057" className="btn btn-primary text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 078 2544 7057
            </a>
            <a href="tel:02036623589" className="btn btn-accent text-lg">
              Emergency: 020 3662 3589
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
