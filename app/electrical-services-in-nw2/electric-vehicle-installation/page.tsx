import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EV Charger Installation in NW2 London | Electric James',
  description: 'Professional home EV charging port installation in North West London. Safe, future-proofed electric vehicle charging solutions. Expert advice on charger types. NAPIT approved electrician.',
  keywords: 'EV charger installation NW2, electric vehicle charging Cricklewood, home EV charger North West London, EV charging point installation',
};

export default function EVChargingPage() {
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
                EV Charger Installation
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Professional home EV charging port installation with safe, future-proofed charging solutions 
              for electric vehicle owners across North West London.
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
                  Home EV Charging Solutions
                </h2>
                <p className="text-gray-600 mb-4">
                  Make the switch to electric vehicles easier with a professional home charging point installation. 
                  We install high-quality EV chargers that provide fast, safe, and convenient charging for your 
                  electric vehicle.
                </p>
                <p className="text-gray-600 mb-6">
                  Our NAPIT-approved electricians ensure your EV charger is installed to the highest standards, 
                  with proper electrical capacity assessment, safe wiring, and full compliance with current regulations.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/ev_charging_icon_1769615095568.png"
                  alt="EV Charger Installation"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            {/* Charger Types */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                EV Charger Options
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">7kW Home Chargers</h4>
                  <p className="text-gray-600 mb-3">
                    Standard home charging solution, perfect for overnight charging. Fully charges most EVs in 6-8 hours.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ideal for single-phase domestic properties</li>
                    <li>• Cost-effective installation</li>
                    <li>• Compatible with all EV models</li>
                  </ul>
                </div>
                <div className="card">
                  <h4 className="text-xl font-semibold mb-3 text-gray-900">22kW Fast Chargers</h4>
                  <p className="text-gray-600 mb-3">
                    Faster charging for three-phase properties. Significantly reduces charging time for compatible vehicles.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Requires three-phase electrical supply</li>
                    <li>• Up to 3x faster than standard chargers</li>
                    <li>• Future-proofed solution</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Installation Process */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Our Installation Process
              </h3>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Site Survey', desc: 'We assess your property\'s electrical capacity and determine the best charger location.' },
                  { step: '2', title: 'Expert Advice', desc: 'Receive professional guidance on the right charger type for your vehicle and usage patterns.' },
                  { step: '3', title: 'Professional Installation', desc: 'Our qualified electricians install your charger with proper wiring and safety measures.' },
                  { step: '4', title: 'Testing & Handover', desc: 'Thorough testing and demonstration to ensure you\'re confident using your new charger.' },
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

            {/* Benefits */}
            <div className="bg-blue-50 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Why Install a Home EV Charger?
              </h3>
              <ul className="space-y-3">
                {[
                  'Charge overnight at cheaper off-peak electricity rates',
                  'Convenience of home charging - no more public charging queues',
                  'Faster charging than standard 3-pin plugs',
                  'Adds value to your property',
                  'Future-proofed for the electric vehicle revolution',
                  'Smart chargers can integrate with solar panels',
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
                Ready to Install Your EV Charger?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Get a free quote and expert advice on the perfect EV charging solution for your home.
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
