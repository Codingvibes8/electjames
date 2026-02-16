'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Cable } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

  const navLinkClass = (href: string) =>
    pathName === href
      ? 'font-bold text-[#9A2D27] border-b-2 border-[#9A2D27] pb-0.5'
      : 'text-gray-700 hover:text-primary transition-colors';

  const isServicesActive = pathName.startsWith('/electrical-services-in-nw2');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative">
              <Cable className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-primary-dark transition-colors" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl xl:text-3xl text-slate-800 tracking-tight">
              Electric<span className="text-primary">Jamex</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" className={navLinkClass('/')}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 ${
                  isServicesActive
                    ? 'font-bold text-[#9A2D27] border-b-2 border-[#9A2D27] pb-0.5'
                    : 'text-gray-700 hover:text-primary transition-colors'
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

            <Link href="/locations" className={navLinkClass('/locations')}>
              Locations
            </Link>

            <Link href="/blog" className={navLinkClass('/blog')}>
              Blog
            </Link>

            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button — separated from nav with ml-auto + gap */}
          <div className="hidden lg:flex items-center ml-8 xl:ml-12">
            <a
              href="tel:078254907077"
              className="group flex items-center gap-2 xl:gap-3 bg-[#BC3931] hover:bg-[#9A2D27] text-white rounded-full pl-3 pr-5 xl:pl-4 xl:pr-6 py-2 xl:py-2.5 transition-all shadow-lg shadow-[#BC3931]/20 hover:shadow-[#BC3931]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="font-bold text-base xl:text-lg">078 2549 077</span>
            </a>
          </div>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href="tel:078254907077"
              className="flex items-center gap-1.5 bg-[#BC3931] hover:bg-[#9A2D27] text-white rounded-full px-3 py-2 sm:px-4 sm:py-2.5 transition-all shadow-md whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              <span className="font-bold text-sm sm:text-base hidden xs:inline">Call Now</span>
            </a>
            <button
              type="button"
              className="p-2 text-gray-700 hover:text-primary rounded-lg hover:bg-gray-100 transition-colors"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl fade-in z-40">
            <div className="flex flex-col p-4 gap-1 max-w-7xl mx-auto">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathName === '/' ? 'bg-red-50 text-[#9A2D27] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div className="rounded-lg overflow-hidden">
                <button
                  type="button"
                  className={`w-full px-4 py-3 flex items-center justify-between font-medium transition-colors rounded-lg ${
                    isServicesActive ? 'bg-red-50 text-[#9A2D27] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                  }`}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="bg-slate-50 px-4 pb-2 rounded-b-lg">
                    <Link
                      href="/electrical-services-in-nw2"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 text-sm font-semibold text-primary"
                    >
                      View All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2.5 text-sm text-slate-600 hover:text-slate-900"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathName === '/locations' ? 'bg-red-50 text-[#9A2D27] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                Locations
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathName === '/blog' ? 'bg-red-50 text-[#9A2D27] font-bold' : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                }`}
              >
                Blog
              </Link>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary font-medium transition-colors"
              >
                Contact
              </Link>

              <div className="mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:078254907077"
                  className="w-full flex items-center bg-[#BC3931] justify-center gap-2 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#BC3931]/20 active:scale-95 transition-all"
                >
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
