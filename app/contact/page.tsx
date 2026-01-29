import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | ElectJames - Expert Electricians NW2",
  description:
    "Get in touch with ElectJames for all your electrical needs in NW2 and surrounding areas. Professional, reliable, and safe electrical services.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "020 8123 4567",
    href: "tel:02081234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@electjames.com",
    href: "mailto:info@electjames.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Cricklewood, London, NW2",
    href: "https://maps.google.com?q=NW2+Cricklewood+London",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 8:00 AM - 6:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Let's <span className="text-orange-500">Connect</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Whether you have a question about a project, need an emergency repair, 
                or want a free quote, we're here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="pb-24 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-gray-400">
                    Reach out to us via any of these channels or fill out the form. 
                    We usually respond within 2 hours during business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {contactDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all"
                    >
                      <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                        <detail.icon className="w-6 h-6" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-400">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-lg font-semibold hover:text-orange-500 transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Map Placeholder / Subtle Design Element */}
                <div className="aspect-video rounded-2xl bg-white/5 border border-white/10 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 capitalize text-8xl font-black select-none">
                    NW2
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-white">Serving NW2 & London</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
