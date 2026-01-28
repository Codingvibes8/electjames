import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'PAT Testing in NW2 London | Electric James',
  description: 'Professional Portable Appliance Testing in North West London. PAT testing for workplaces and rental properties. Visual and electrical tests. NAPIT approved electrician.',
  keywords: 'PAT testing NW2, portable appliance testing Cricklewood, workplace PAT testing North West London, landlord PAT testing',
};

export default function PATTestingPage() {
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
                PAT Testing Services
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Portable Appliance Testing for workplaces and rental properties. Combining visual inspections 
              and electrical tests for all plug-in equipment.
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
                  Professional PAT Testing
                </h2>
                <p className="text-gray-600 mb-4">
                  Portable Appliance Testing (PAT) is essential for ensuring the safety of electrical equipment 
                  in workplaces and rental properties. Our comprehensive testing service covers all portable 
                  appliances from kettles and computers to power tools and IT equipment.
                </p>
                <p className="text-gray-600 mb-6">
                  We provide detailed test reports, safety labels, and certificates to demonstrate compliance 
                  with health and safety regulations.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/pat_testing_icon_1769615251638.png"
                  alt="PAT Testing"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                What We Test
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Office Equipment (computers, printers, monitors)',
                  'Kitchen Appliances (kettles, microwaves, fridges)',
                  'Power Tools (drills, saws, grinders)',
                  'IT Equipment (servers, routers, switches)',
                  'Extension Leads & Adaptors',
                  'Portable Heaters & Fans',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-primary to-primary-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Book Your PAT Testing
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Competitive rates for businesses and landlords. On-site testing with minimal disruption.
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
