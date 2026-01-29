import Link from "next/link";
import { ArrowLeft, FileText, Phone, Mail, MapPin, Building2, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Provision of Services Regulations | Electric James - Expert Electricians NW2",
  description: "Required information under the Provision of Services Regulations for Electric James.",
};

export default function ProvisionOfServicesPage() {
  const infoItems = [
    {
      icon: Building2,
      label: "Legal Form",
      value: "A sole trader",
    },
    {
      icon: FileText,
      label: "Service",
      value: "Electrical services, installations and repairs",
    },
    {
      icon: MapPin,
      label: "Registered Office & Postal Address",
      value: "80 Galsworthy Road, Cricklewood, London, NW2 2SH",
    },
    {
      icon: Phone,
      label: "Telephone",
      value: "020 3662 3589",
      href: "tel:02036623589",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@electricjames.com",
      href: "mailto:hello@electricjames.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Link */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500">
              <FileText className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Provision of <span className="text-orange-500">Services Regulations</span>
              </h1>
              <p className="text-gray-400 mt-2">Essential trading and regulatory information</p>
            </div>
          </div>

          <div className="space-y-12">
            {/* Core Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {infoItems.map((item, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2 text-orange-500">
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">{item.label}</span>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-orange-500 transition-colors block text-lg font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white text-lg font-medium">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Detailed Sections */}
            <div className="space-y-12 text-gray-300 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white border-b border-orange-500/20 pb-2">Regulating Body</h2>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 flex-shrink-0 bg-white p-2 rounded-xl">
                    <Image 
                      src="/images/napit-badge.png" 
                      alt="NAPIT logo" 
                      fill 
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="text-lg">
                      <span className="font-semibold text-white">NAPIT</span> (National Association of Professional Inspectors and Testers). 
                    </p>
                    <a href="http://www.napit.org.uk/" className="inline-flex items-center gap-1 text-orange-500 hover:underline mt-1">
                      Visit Website <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white border-b border-orange-500/20 pb-2">Applicable Law</h2>
                <p>
                  Unless otherwise agreed, English law applies, with the English Courts having exclusive jurisdiction in relation to any claim, dispute or difference concerning the service and any matter arising from it.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white border-b border-orange-500/20 pb-2">Work Guarantees</h2>
                <div className="bg-orange-500/5 border border-orange-500/10 p-6 rounded-2xl">
                  <p>
                    All works guaranteed for <span className="text-white font-semibold">3 months from date of completion</span>. This covers labour and parts as per manufacturers' warranty. Your statutory rights are not affected by our guarantee. Guarantees/warranties are not insurance backed.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white border-b border-orange-500/20 pb-2">Complaints Procedure</h2>
                <p>
                  Complaints can be made by contacting Electric James at the above address. Where we cannot resolve any complaints using our own complaints procedure, as a <span className="font-semibold text-white">Which? Trusted Trader</span> we use Dispute Resolution Ombudsman for dispute resolution.
                </p>
                <p className="text-sm">
                  In the unlikely event of a complaint arising and you wish to refer the complaint to them please contact <span className="text-orange-500 font-bold">0333 241 3209</span> or via their <a href="http://www.disputeresolutionombudsman.org/membership/whichtrustedtraders/" className="text-orange-500 hover:underline inline-flex items-center gap-1">website <ExternalLink className="w-3 h-3" /></a>.
                </p>
              </section>

              {/* Internal Links for SEO */}
              <section className="pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Related Services</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/electrical-services-in-nw2/electrical-safety-certificates" className="text-orange-500 hover:underline">Safety Inspection (EICR)</Link>
                  <Link href="/electrical-services-in-nw2/air-conditioning-services" className="text-orange-500 hover:underline">Air Conditioning</Link>
                  <Link href="/contact" className="text-orange-500 hover:underline">Request A Service</Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
