import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Electric James - Expert Electricians NW2",
  description: "Privacy Policy for Electric James. Understand how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy <span className="text-orange-500">Policy</span></h1>
              <p className="text-gray-400 mt-2">Last updated: January 2026</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Commitment to Privacy</h2>
              <p>
                Electric James is committed to protecting and respecting your privacy. This policy and any other documents referred to on it sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Information We May Collect</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                <p>We may collect and process the following data about you:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                  <li>Information that you provide by filling in forms on our site (e.g., contact form).</li>
                  <li>If you contact us, we may keep a record of that correspondence.</li>
                  <li>Details of your visits to our site including, but not limited to, traffic data, location data, and other communication data.</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              <p>
                You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data.
              </p>
              <p>
                You can also exercise the right at any time by contacting us at:
                <br />
                <span className="font-semibold text-white">Electric James, 80 Galsworthy Road, London NW2 2SH</span>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Cookies</h2>
              <p>
                This website uses cookies so that we can provide you with the best user experience possible. Cookie information is stored in your browser and performs functions such as recognising you when you return to our website and helping our team to understand which sections of the website you find most interesting and useful.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium text-white text-base">Email</p>
                    <a href="mailto:hello@electricjames.com" className="hover:text-orange-500 transition-colors">hello@electricjames.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p className="font-medium text-white text-base">Address</p>
                    <p>80 Galsworthy Road, London NW2 2SH</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Internal Links for SEO */}
            <section className="pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Related Services</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/electrical-services-in-nw2/electrical-safety-certificates" className="text-orange-500 hover:underline">EICR Certificates</Link>
                <Link href="/electrical-services-in-nw2/electric-vehicle-installation" className="text-orange-500 hover:underline">EV Charging</Link>
                <Link href="/contact" className="text-orange-500 hover:underline">Contact For Quote</Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
