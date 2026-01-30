'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Phone,Cable } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    { name: 'Air Conditioning Services', href: '/electrical-services-in-nw2/air-conditioning-services' },
    { name: 'EV Charger Installation', href: '/electrical-services-in-nw2/electric-vehicle-installation' },
    { name: 'Electrical Safety Certificates', href: '/electrical-services-in-nw2/electrical-safety-certificates' },
    { name: 'Outdoor Lighting & Heating', href: '/electrical-services-in-nw2/outdoor-lighting-and-heating' },
    { name: 'PAT Testing', href: '/electrical-services-in-nw2/pat-testing' },
    { name: 'Flood Damage Assessment', href: '/electrical-services-in-nw2/flood-damage-electrical-assessment' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-start gap-2">
           
              <Cable className='w-8 h-8 ring-2 ring-red-800 rounded-full p-1'/>
           <span className="font-bold font-serif text-3xl text-red-800">ElectricJamex</span>
           
          </Link>

          {/* / Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1">
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
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors font-semibold border-b border-gray-100"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/locations" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Locations
            </Link>

            <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            
            <Link href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex justify-center items-center gap-2 rounded-md bg-blue-800 p-2">
            <Phone className='w-6 h-6 text-slate-200 rounded-full p-1 ring-1 ring-slate-300'/>
            <a href="tel:078 25490 7077" className="text-white font-semibold hover:text-primary-dark transition-colors">
              078 25490 7077
            </a>
           
          </div>

          {/* Mobile Menu Button */}
          <button
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
          <div className="lg:hidden border-t bg-blue-400 border-gray-200 fade-in min-h-screen">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button 
                  className="text-gray-700 hover:text-primary font-medium transition-colors py-2 flex items-center justify-between w-full"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    <Link
                      href="/electrical-services-in-nw2"
                      className="text-gray-600 hover:text-primary transition-colors py-2 font-semibold"
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-gray-600 hover:text-primary transition-colors py-2"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/locations" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                Locations
              </Link>

              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                Blog
              </Link>
              
              <Link href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                Contact
              </Link>

              <div className="flex justify-center items-center gap-2 pt-4 border-t border-gray-200">
                
                <a href="tel:078 25490 7077" className="btn btn-primary w-full">
                  Call: 078 25490 7077
                </a>
              
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
