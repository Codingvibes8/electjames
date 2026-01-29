import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const services = [
    { name: 'Air Conditioning', href: '/electrical-services-in-nw2/air-conditioning-services' },
    { name: 'EV Charger Installation', href: '/electrical-services-in-nw2/electric-vehicle-installation' },
    { name: 'Safety Certificates (EICR)', href: '/electrical-services-in-nw2/electrical-safety-certificates' },
    { name: 'Outdoor Lighting & Heating', href: '/electrical-services-in-nw2/outdoor-lighting-and-heating' },
    { name: 'PAT Testing', href: '/electrical-services-in-nw2/pat-testing' },
    { name: 'Flood Damage Assessment', href: '/electrical-services-in-nw2/flood-damage-electrical-assessment' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Electric James Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Good honest reliable electrician serving North West London since 2010.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="relative w-20 h-20">
                <Image
                  src="/images/napit-badge.png"
                  alt="NAPIT Part P Approved"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Service Areas
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Cricklewood (NW2)</li>
              <li>Willesden Green</li>
              <li>Kilburn</li>
              <li>Dollis Hill</li>
              <li>Mapesbury</li>
              <li>Hampstead</li>
              <li>West Hampstead</li>
              <li>North West London</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:07825447057" className="hover:text-white transition-colors block">
                    078 2544 7057
                  </a>
                  <a href="tel:02036623589" className="hover:text-white transition-colors block">
                    020 3662 3589
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@electricjames.com" className="hover:text-white transition-colors">
                  hello@electricjames.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Cricklewood, London NW2</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Electric James. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/provision-of-services-regulations-information" className="hover:text-white transition-colors">
              Provision of Services Information
            </Link>
          </div>
          <div className="text-center md:text-right space-y-1">
             <p>Fully qualified (18th edition) and Part P certified</p>
             <p>NAPIT Approved Contractor | Which? Trusted Trader</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
