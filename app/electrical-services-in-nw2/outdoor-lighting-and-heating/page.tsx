import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Outdoor Lighting & Heating in NW2 London | Electric James',
  description: 'Professional outdoor electrical installations in North West London. Garden lighting, patio heating, and weatherproof electrical solutions. NAPIT approved electrician.',
  keywords: 'outdoor lighting NW2, garden lighting Cricklewood, patio heating North West London, outdoor electrical installation',
};

export default function OutdoorLightingPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link href="/electrical-services-in-nw2" className="text-primary hover:text-primary-dark transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Outdoor Lighting & Heating
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Weatherproof electrical installations for gardens and patios including aesthetic security lighting 
              and infrared outdoor heating solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Transform Your Outdoor Space
                </h2>
                <p className="text-gray-600 mb-4">
                  Extend your living space outdoors with professional electrical installations. From atmospheric 
                  garden lighting to cozy patio heaters, we create outdoor environments you can enjoy year-round.
                </p>
                <p className="text-gray-600 mb-6">
                  All our outdoor installations use weatherproof, IP-rated equipment and are installed to the highest 
                  safety standards by our NAPIT-approved electricians.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/outdoor_lighting_icon_1769615222026.png"
                  alt="Outdoor Lighting and Heating"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Our Outdoor Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Garden Lighting</h4>
                  <p className="text-gray-600">
                    Create ambiance and improve security with professionally installed garden lights, path lighting, 
                    and feature spotlights.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Security Lighting</h4>
                  <p className="text-gray-600">
                    Motion-activated security lights and floodlights to protect your property and deter intruders.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Patio Heating</h4>
                  <p className="text-gray-600">
                    Infrared patio heaters for comfortable outdoor dining and entertaining, even on cooler evenings.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Outdoor Sockets</h4>
                  <p className="text-gray-600">
                    Weatherproof outdoor power sockets for garden tools, hot tubs, and outdoor entertainment systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Ready to Enhance Your Outdoor Space?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us for expert advice and a free quote on outdoor electrical installations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:07825447057" className="btn bg-white text-primary hover:bg-gray-100">
                  Call: 078 2544 7057
                </a>
                <a href="mailto:hello@electricjames.com" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
