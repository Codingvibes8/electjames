import Link from 'next/link';
import Image from 'next/image';
import { Cable, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const services = [
    { name: 'Air Conditioning', href: '/electrical-services-in-nw2/air-conditioning-services' },
    { name: 'EV Charger Installation', href: '/electrical-services-in-nw2/electric-vehicle-installation' },
    { name: 'Safety Certificates (EICR)', href: '/electrical-services-in-nw2/electrical-safety-certificates' },
    { name: 'Outdoor Lighting & Heating', href: '/electrical-services-in-nw2/outdoor-lighting-and-heating' },
    { name: 'PAT Testing', href: '/electrical-services-in-nw2/pat-testing' },
    { name: 'Flood Damage Assessment', href: '/electrical-services-in-nw2/flood-damage-electrical-assessment' },
  ];

  const areas = [
    'Cricklewood (NW2)',
    'Willesden Green',
    'Kilburn',
    'Dollis Hill',
    'Mapesbury',
    'Hampstead',
    'West Hampstead',
    'North West London',
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-20  px-4 md:px-16 lg:px-32">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                 <Cable className='w-8 h-8 text-[#BC3931]'/>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Electric<span className="text-[#BC3931]">Jamex</span>
              </span>
            </Link>
            
            <p className="text-slate-400 leading-relaxed">
              Good honest reliable electrician serving North West London since 2010. 
              Top-rated for safety, quality, and customer service.
            </p>

            <div className="pt-4">
              <div className="relative w-24 h-24 bg-white/5 rounded-lg p-2 flex items-center justify-center">
                 {/* Napit Badge Container - improved visibility */}
                 <div className="relative w-full h-full">
                    <Image
                      src="/images/napit-badge.png"
                      alt="NAPIT Part P Approved"
                      fill
                      className="object-contain"
                    />
                 </div>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C18BFC] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="flex items-center group hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#C18BFC] mr-2 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider relative inline-block">
              Service Areas
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C18BFC] rounded-full"></span>
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {areas.map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-4 h-4 text-slate-600 shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
             <h3 className="text-white text-lg font-bold mb-6 uppercase tracking-wider relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#C18BFC] rounded-full"></span>
            </h3>
            <ul className="space-y-6">
              <li>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#BC3931]/10 rounded-full group-hover:bg-[#BC3931] transition-colors duration-300">
                    <Phone className="w-5 h-5 text-[#BC3931] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Mobile</p>
                    <a href="tel:07825490707" className="text-lg text-white font-bold hover:text-[#C18BFC] transition-colors block">
                      078 2549 0707
                    </a>
                  </div>
                </div>
              </li>
              
              <li>
                <div className="flex items-start gap-4 group">
                   <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                    <Phone className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Office</p>
                    <a href="tel:02098627865" className="text-base text-slate-300 hover:text-white transition-colors block">
                      020 9862 7865
                    </a>
                  </div>
                </div>
              </li>

              <li>
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-slate-700 transition-colors">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:hello@electricjamex.com" className="text-base text-slate-300 hover:text-white transition-colors">
                      hello@electricjamex.com
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bg-slate-950 border-t border-slate-900">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <div className="text-center md:text-left">
              <p>&copy; {currentYear} Electric Jamex. All rights reserved.</p>
              <div className="mt-1 flex gap-2 justify-center md:justify-start">
                 <span>Fully qualified (18th edition)</span>
                 <span>&bull;</span>
                 <span>Part P certified</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
               <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
                  Privacy Policy
               </Link>
               <Link href="/provision-of-services-regulations-information" className="hover:text-slate-300 transition-colors">
                  Terms of Service
               </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
