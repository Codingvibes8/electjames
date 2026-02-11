'use client';

import Link from 'next/link';

import { useState } from 'react';
import { Phone,Cable } from 'lucide-react';
import { usePathname } from "next/navigation"





export default function Header() {


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
const pathName = usePathname();

  const services = [
    { name: 'Air Conditioning Services', href: '/electrical-services-in-nw2/air-conditioning-services' },
    { name: 'EV Charger Installation', href: '/electrical-services-in-nw2/electric-vehicle-installation' },
    { name: 'Electrical Safety Certificates', href: '/electrical-services-in-nw2/electrical-safety-certificates' },
    { name: 'Outdoor Lighting & Heating', href: '/electrical-services-in-nw2/outdoor-lighting-and-heating' },
    { name: 'PAT Testing', href: '/electrical-services-in-nw2/pat-testing' },
    { name: 'Flood Damage Assessment', href: '/electrical-services-in-nw2/flood-damage-electrical-assessment' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-start gap-2 group">
              <div className="relative">
                <Cable className='w-8 h-8 text-primary group-hover:text-primary-dark transition-colors'/>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            <span className="font-display font-bold text-2xl lg:text-3xl text-slate-800 tracking-tight">Electric<span className="text-primary">James</span></span>
          </Link>

          {/* / Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={`pathName ? "underline font-bold text-[#9A2D27] " : "text-gray-700 hover:text-primary transition-colors"`}>
              Home
            </Link>



            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}

            >



              
              <button type="button" className={`pathName ? "underline font-bold text-[#9A2D27] " : "text-gray-700 hover:text-primary transition-colors", "flex items-center gap-1"`}>
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 fade-in">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                    <Link
                      href="/electrical-services-in-nw2"
                      className="block px-4 py-3 text-gray-700 hover:bg-[#F3E8FF] hover:text-primary transition-colors font-semibold border-b border-gray-100"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-[#F3E8FF] hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/locations" className={`pathName ? "underline font-bold text-[#9A2D27] " : "text-gray-700 hover:text-primary transition-colors"`}>
              Locations
            </Link>

            <Link href="/blog"className={`pathName ? "underline font-bold text-[#9A2D27] " : "text-gray-700 hover:text-primary transition-colors"`}>
              Blog
            </Link>
            
            <Link href="#contact" className={`pathName ? "underline font-bold text-[#9A2D27] " : "text-gray-700 hover:text-primary transition-colors"`}>
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:078254907077" className="group flex items-center gap-3 bg-[#BC3931] hover:bg-[#9A2D27] text-white rounded-full pl-4 pr-6 py-2.5 transition-all shadow-lg shadow-[#BC3931]/20 hover:shadow-[#BC3931]/30 hover:-translate-y-0.5">
              <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                <Phone className='w-4 h-4'/>
              </div>
              <div className="flex flex-col items-start leading-none">

                <span className="font-bold text-lg">078 2549 077</span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
          type="button"
            className="lg:hidden p-2 text-gray-700 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-auto left-0 w-full bg-white border-b border-gray-100 shadow-xl fade-in z-40">
            <div className="flex flex-col p-4 gap-2">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors">
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="rounded-lg overflow-hidden">
                <button 
                type="button"
                  className="w-full px-4 py-3 flex items-center justify-between text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="bg-slate-50 px-4 pb-2">
                    <Link
                      href="/electrical-services-in-nw2"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm font-semibold text-primary"
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-sm text-slate-600 hover:text-slate-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/locations" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors">
                Locations
              </Link>

              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors">
                Blog
              </Link>
              
              <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors">
                Contact
              </Link>

              <div className="mt-2 p-2 border-t border-gray-100">
                <a href="tel:078254907077" className="w-full flex items-center bg-[#BC3931] justify-center gap-2 text-white font-bold py-3 rounded-xl shadow-lg shadow-[#BC3931]/20 active:scale-95 transition-all">
                  <Phone className="w-5 h-5" />
                  Call: 078 2549 077
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
