import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Air Conditioning Services in NW2 London | Electric James',
  description: 'Professional air conditioning installation and maintenance in North West London. Energy-efficient split-system AC units. F-Gas compliant installations by NAPIT approved electrician.',
  keywords: 'air conditioning NW2, AC installation Cricklewood, air conditioning North West London, F-Gas compliant, split system AC',
};

export default function AirConditioningPage() {
  return (
    <main>
      {/* Hero Section */}
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
                Air Conditioning Services
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional installation and maintenance of energy-efficient split-system air conditioning 
              for residential and small commercial spaces in North West London.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                  Climate Control Solutions
                </h2>
                <p className="text-gray-600 mb-4">
                  Stay comfortable year-round with our professional air conditioning installation services. 
                  We specialize in energy-efficient split-system units that provide effective climate control 
                  for homes and businesses across NW2 and North West London.
                </p>
                <p className="text-gray-600 mb-6">
                  All our installations are F-Gas compliant and carried out by fully qualified, NAPIT-approved 
                  electricians. We ensure your system is installed safely, efficiently, and in accordance with 
                  all current regulations.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/air_conditioning_icon_1769614960556.png"
                  alt="Air Conditioning Services"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            {/* Services Offered */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                What We Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Installation</h4>
                  <p className="text-gray-600">
                    Complete installation of split-system air conditioning units, including electrical connections, 
                    pipework, and commissioning.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Maintenance</h4>
                  <p className="text-gray-600">
                    Regular servicing to keep your AC running efficiently, including filter cleaning, 
                    refrigerant checks, and performance optimization.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Repairs</h4>
                  <p className="text-gray-600">
                    Fast, reliable repair services for all makes and models of air conditioning systems, 
                    with genuine parts and expert diagnosis.
                  </p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">F-Gas Compliance</h4>
                  <p className="text-gray-600">
                    All work carried out in full compliance with F-Gas regulations, ensuring environmental 
                    responsibility and legal compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Benefits of Professional Installation
              </h3>
              <ul className="space-y-3">
                {[
                  'Energy-efficient cooling and heating',
                  'Improved indoor air quality',
                  'Reduced energy bills',
                  'Quiet operation',
                  'Professional installation with warranty',
                  'F-Gas compliant and environmentally responsible',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Ready to Install Air Conditioning?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us today for a free quote and expert advice on the best AC solution for your property.
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
