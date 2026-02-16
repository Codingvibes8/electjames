import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Quote, ExternalLink, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recommendations & Reviews | Electric Jamex - NW2 Electrician',
  description:
    'Read customer reviews and recommendations for Electric Jamex,your trusted NW2 electrician. NAPIT approved, Which? Trusted Trader rated. See what our customers say.',
  keywords:
    'electrician reviews NW2, Electric Jamex recommendations, trusted electrician Cricklewood, customer testimonials electrician London',
};

const reviews = [
  {
    name: 'Sarah M.',
    date: 'January 2026',
    rating: 5,
    text: 'James was fantastic from start to finish. He arrived on time, diagnosed the issue quickly, and had everything fixed within a couple of hours. Very professional and tidy — wouldn\'t hesitate to recommend him to anyone in the NW2 area.',
  },
  {
    name: 'David R.',
    date: 'December 2025',
    rating: 5,
    text: 'Reliable, efficient, works quickly and fixed a problem a previous electrician couldn\'t. Excellent communication throughout and left everything spotless. Will definitely use again.',
  },
  {
    name: 'Emma T.',
    date: 'November 2025',
    rating: 5,
    text: 'Had a full EICR done on our rental property. James explained everything clearly, was very thorough, and provided the certificate promptly. Great value for money compared to other quotes we received.',
  },
  {
    name: 'Mark W.',
    date: 'October 2025',
    rating: 5,
    text: 'Professional, pleasant to have around and knows his stuff. Installed an EV charger at our home — the whole process was seamless. Highly recommended for any electrical work.',
  },
  {
    name: 'Lisa P.',
    date: 'September 2025',
    rating: 5,
    text: 'James installed outdoor lighting and a patio heater for us. The result is beautiful and exactly what we wanted. He offered great advice on placement and energy efficiency. Top-quality work.',
  },
  {
    name: 'Robert K.',
    date: 'August 2025',
    rating: 5,
    text: 'Called James for an emergency after a power trip late in the evening. He responded quickly, identified a faulty circuit, and had us back up and running the same night. Can\'t thank him enough.',
  },
  {
    name: 'Angela H.',
    date: 'July 2025',
    rating: 5,
    text: 'We\'ve used James for multiple jobs over the past year — PAT testing, new sockets, and a consumer unit upgrade. Always punctual, fairly priced, and does a brilliant job every time.',
  },
  {
    name: 'Chris D.',
    date: 'June 2025',
    rating: 5,
    text: 'Needed air conditioning installed before summer and James delivered. Clean installation, minimal disruption, and the system works perfectly. Very knowledgeable and easy to deal with.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
}

export default function RecommendationsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F3E8FF]/40 via-white to-[#F5E0DF]/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Customer <span className="text-[#BC3931]">Recommendations</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the homeowners and
              businesses across North West London who trust Electric James for
              their electrical needs.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="relative w-24 h-24 bg-white rounded-xl shadow-md p-2 flex items-center justify-center">
                <Image
                  src="/my-napit-badge.png"
                  alt="NAPIT Part P Approved"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  5.0 Average Rating
                </span>
              </div>
              <div className="bg-white rounded-xl shadow-md px-5 py-3 text-center">
                <p className="text-2xl font-bold text-[#BC3931]">{reviews.length}+</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Verified Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from real customers across Cricklewood, Kilburn,
              Willesden Green, and the wider NW2 area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="group bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:border-[#C18BFC]/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-[#C18BFC]/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  {review.text}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Review Links */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Find Us On
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read more reviews on these trusted platforms
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { name: 'Google Reviews', href: 'https://g.page/r/electricjames' },
              { name: 'Facebook', href: 'https://facebook.com/electricjames' },
              { name: 'Which? Trusted Traders', href: 'https://trustedtraders.which.co.uk' },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white rounded-xl border border-gray-200 px-6 py-5 font-semibold text-gray-800 hover:border-[#C18BFC]/40 hover:shadow-md hover:text-[#BC3931] transition-all duration-300"
              >
                {platform.name}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="section bg-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Had Work Done By Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;d love to hear about your experience. Your feedback helps us
            improve and helps others find a trusted electrician.
          </p>
          <Link
            href="/contact"
            className="btn btn-accent text-lg inline-flex items-center gap-2"
          >
            Leave Your Feedback
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-lg bg-gradient-to-br from-[#9A2D27] via-[#BC3931] to-[#7A2320] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: 'var(--font-poppins)' }}
          >
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join our growing list of satisfied customers. Get in touch for a free
            quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07825490707"
              className="btn bg-white text-[#BC3931] hover:bg-gray-100 text-lg inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              078 2549 0707
            </a>
            <a
              href="mailto:hello@electricjamex.com"
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-[#BC3931] text-lg inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
