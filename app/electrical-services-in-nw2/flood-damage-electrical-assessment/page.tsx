import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Flood Damage Electrical Assessment in NW2 London | Electric James',
  description: 'Emergency flood damage electrical assessment in North West London. Critical post-flood safety inspections and electrical system restoration. EICR assessments. NAPIT approved electrician.',
  keywords: 'flood damage electrical NW2, post-flood electrical inspection Cricklewood, flood damage assessment North West London, emergency electrician',
};

export default function FloodDamagePage() {
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
                Flood Damage Electrical Assessment
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Critical post-flood safety inspections and electrical system restoration services. 
              EICR assessments required before safely restoring power.
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
                  Emergency Flood Damage Service
                </h2>
                <p className="text-gray-600 mb-4">
                  Flooding can cause serious damage to your property's electrical system. Water and electricity 
                  are a dangerous combination, and it's crucial to have a professional assessment before 
                  attempting to restore power.
                </p>
                <p className="text-gray-600 mb-6">
                  Our emergency flood damage service includes comprehensive EICR inspections of all affected 
                  electrical installations, including fixed equipment like boilers and cookers, to ensure 
                  your property is safe before power is restored.
                </p>
              </div>
              <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/flood_damage_icon_1769615332478.png"
                  alt="Flood Damage Assessment"
                  fill
                  className="object-contain p-8 bg-gray-50"
                />
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-error rounded-lg p-6 mb-12">
              <div className="flex gap-3">
                <svg className="w-6 h-6 text-error flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h4 className="font-bold text-error mb-2">IMPORTANT SAFETY WARNING</h4>
                  <p className="text-gray-700">
                    Never attempt to restore power to a flooded property without a professional electrical inspection. 
                    Water-damaged electrical systems can cause electric shocks, fires, and even explosions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'var(--font-poppins)' }}>
                Our Flood Damage Assessment Includes
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Full EICR Inspection', desc: 'Comprehensive electrical safety inspection of all affected areas' },
                  { title: 'Fixed Equipment Testing', desc: 'Inspection of boilers, cookers, and other fixed electrical appliances' },
                  { title: 'Wiring Assessment', desc: 'Detailed examination of all electrical wiring for water damage' },
                  { title: 'Safety Certification', desc: 'Official certification once your electrical system is safe to use' },
                  { title: 'Repair Recommendations', desc: 'Clear guidance on any necessary repairs or replacements' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start card">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-error to-red-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
                Emergency Flood Damage? Call Now
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Available 24/7 for emergency flood damage assessments. Fast response to get your property safe and operational.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:02036623589" className="btn bg-white text-error hover:bg-gray-100 text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Emergency: 020 3662 3589
                </a>
                <a href="tel:07825447057" className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-error">
                  Call: 078 2544 7057
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
