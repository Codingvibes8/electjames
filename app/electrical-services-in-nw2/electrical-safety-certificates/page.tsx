import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrical Safety Certificates (EICR) in NW2 London | Electric James',
  description: 'Professional EICR electrical safety certificates in North West London. Comprehensive inspections for landlords, homebuyers, and businesses. BS 7671 compliant. NAPIT approved electrician.',
  keywords: 'EICR NW2, electrical safety certificate Cricklewood, landlord electrical certificate North West London, BS 7671 inspection',
};

export default function SafetyCertificatesPage() {
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
                Electrical Safety Certificates (EICR)
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive EICR inspections for landlords, homebuyers, and businesses to ensure 
              your electrical installations meet BS 7671 safety standards.
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
                  Professional EICR Inspections
                </h2>
                <p className="text-gray-600 mb-4">
                  An Electrical Installation Condition Report (EICR) is a formal inspection of your property's 
                  electrical system. It's a legal requirement for landlords and essential for homebuyers, 
                  businesses, and anyone concerned about electrical safety.
                </p>
                <p className="text-gray-600 mb-6">
                  Our NAPIT-approved electricians conduct thorough inspections to identify any potential hazards, 
                  deterioration, or non-compliance with current BS 7671 wiring regulations.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/safety_certificate_icon_1769615156599.png"
                  alt="Electrical Safety Certificates"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            {/* What Gets Tested */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                What Gets Tested During an EICR
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '🔌', title: 'Wiring & Cables', desc: 'Condition of all electrical wiring throughout the property' },
                  { icon: '⚡', title: 'Consumer Unit', desc: 'Fuse box/distribution board and circuit protection' },
                  { icon: '🔧', title: 'Sockets & Switches', desc: 'All electrical outlets and switching mechanisms' },
                  { icon: '💡', title: 'Light Fixtures', desc: 'Fixed lighting installations and connections' },
                  { icon: '🏠', title: 'Bonding & Earthing', desc: 'Protective earthing and equipotential bonding' },
                  { icon: '🔥', title: 'Fixed Appliances', desc: 'Boilers, cookers, and other fixed equipment' },
                ].map((item) => (
                  <div key={item.title} className="card text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Needs EICR */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Who Needs an EICR?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Landlords</h4>
                  <p className="text-gray-600 mb-3">
                    Legal requirement for all rental properties. Must be conducted every 5 years or at change of tenancy.
                  </p>
                  <p className="text-sm text-gray-500">Required by law since June 2020</p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Homebuyers</h4>
                  <p className="text-gray-600 mb-3">
                    Essential before purchasing a property to identify any electrical issues that could affect safety or value.
                  </p>
                  <p className="text-sm text-gray-500">Recommended for all property purchases</p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Businesses</h4>
                  <p className="text-gray-600 mb-3">
                    Required for commercial properties to ensure employee safety and insurance compliance.
                  </p>
                  <p className="text-sm text-gray-500">Part of health & safety obligations</p>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">Homeowners</h4>
                  <p className="text-gray-600 mb-3">
                    Recommended every 10 years or after major electrical work to ensure ongoing safety.
                  </p>
                  <p className="text-sm text-gray-500">Peace of mind for your family</p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Our EICR Process
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Visual Inspection', desc: 'Thorough visual examination of all accessible electrical installations' },
                  { step: '2', title: 'Testing', desc: 'Comprehensive electrical testing using calibrated equipment' },
                  { step: '3', title: 'Report', desc: 'Detailed EICR report with any issues categorized by severity (C1, C2, C3)' },
                  { step: '4', title: 'Recommendations', desc: 'Clear guidance on any remedial work required' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Book Your EICR Inspection Today
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Fast, professional EICR inspections with same-day certificates available. Competitive pricing for landlords.
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
