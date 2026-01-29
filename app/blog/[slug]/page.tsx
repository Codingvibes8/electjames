
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  'electrical-safety-tips': {
    title: 'Electrical Safety Tips for Homeowners',
    description: 'Essential electrical safety tips to keep your family and home safe from electrical hazards. Advice from Electric James, expert electrician in NW2.',
    date: 'January 28, 2026',
    category: 'Home Safety',
    content: (
      <>
        <p className="mb-6">Electrical safety is paramount for every homeowner. While electricity is essential for modern living, it can also be dangerous if not handled correctly. At Electric James, we believe prevention is the best approach to home safety.</p>
        
        <h2 className="text-2xl font-bold mb-4">1. Regularly Test Your Smoke Alarms</h2>
        <p className="mb-6">It sounds simple, but working smoke alarms save lives. Many house fires are electrical in origin, and early detection is key. Test your alarms monthly and replace batteries at least once a year.</p>

        <h2 className="text-2xl font-bold mb-4">2. Don't Overload Outlets</h2>
        <p className="mb-6">Using multi-way adapters can be convenient, but they often lead to overloaded circuits. If you find yourself relying on extension cords, it might be time to install more permanent sockets. Check out our <Link href="/electrical-services-in-nw2/electrical-safety-certificates" className="text-primary hover:underline">Electrical Safety Certificates</Link> page to learn about proper circuit inspections.</p>

        <h2 className="text-2xl font-bold mb-4">3. Check for Frayed Cords</h2>
        <p className="mb-6">Damaged cables are a major fire hazard and can cause electric shocks. If a cord is warm to the touch or shows any signed of damage, replace it immediately. For appliances used in commercial settings, regular <Link href="/electrical-services-in-nw2/pat-testing" className="text-primary hover:underline">PAT Testing</Link> is essential.</p>

        <h2 className="text-2xl font-bold mb-4">4. Know Your Circuit Breaker Box</h2>
        <p className="mb-6">Every adult in the house should know where the main electrical panel is located and how to shut off the power in an emergency.</p>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
          <h3 className="text-lg font-bold mb-2">Need a Professional Check?</h3>
          <p className="mb-4">If you're unsure about the state of your home's wiring, don't take the risk. Electric James provides comprehensive inspections across NW2 and North West London.</p>
          <Link href="/#contact" className="btn btn-primary inline-block">Contact Us Today</Link>
        </div>
      </>
    ),
  },
  'importance-of-eicr': {
    title: 'Why You Need an EICR Certificate',
    description: 'Understanding the importance of Electrical Installation Condition Reports (EICR) for landlords and homeowners in London.',
    date: 'January 15, 2026',
    category: 'Landlord Advice',
    content: (
      <>
        <p className="mb-6">An Electrical Installation Condition Report (EICR) is an essential document for any property owner, particularly for landlords. It provides a comprehensive assessment of the electrical systems within a property to ensure they are safe and meet current regulations.</p>

        <h2 className="text-2xl font-bold mb-4">What is an EICR?</h2>
        <p className="mb-6">Often referred to as "landlord safety checks," an EICR involves a thorough inspection and testing of the fixed electrical parts of your property, such as the wiring, socket-outlets, light fittings, and the consumer unit.</p>

        <h2 className="text-2xl font-bold mb-4">Legal Requirements for Landlords</h2>
        <p className="mb-6">As of April 2021, all rental properties in England must have a valid <Link href="/electrical-services-in-nw2/electrical-safety-certificates" className="text-primary hover:underline">EICR certificate</Link>. Failure to comply can result in significant fines and invalidated insurance policies.</p>

        <h2 className="text-2xl font-bold mb-4">Benefits for Homeowners</h2>
        <p className="mb-6">Even if you're not a landlord, having an EICR done every 10 years is recommended. It identifies potential hazards before they become dangerous, providing peace of mind for you and your family.</p>

        <div className="bg-slate-900 text-white p-8 rounded-2xl my-8">
          <h3 className="text-xl font-bold mb-2">Book Your EICR in NW2</h3>
          <p className="mb-6 opacity-90">Our expert testing ensures your property remains compliant and safe. We provide clear, detailed reports and can carry out any necessary remedial work.</p>
          <Link href="/#contact" className="btn btn-accent inline-block">Request a Quote</Link>
        </div>
      </>
    ),
  },
  'signs-you-need-rewire': {
    title: '5 Signs Your Home Might Need a Rewire',
    description: 'Learn the warning signs of outdated or dangerous electrical wiring. When to call an NW2 electrician for a partial or full rewire.',
    date: 'December 10, 2025',
    category: 'Maintenance',
    content: (
      <>
        <p className="mb-6">Old electrical wiring is not just an inconvenience; it's a serious safety risk. If your home is more than 25-30 years old and hasn't had its wiring checked recently, you should be aware of these common warning signs.</p>

        <h2 className="text-2xl font-bold mb-4">1. Persistent Burning Smell</h2>
        <p className="mb-6">If you notice a faint smell of burning plastic near sockets or light switches, this is an emergency. It often indicates that the insulation around the wiring is overheating.</p>

        <h2 className="text-2xl font-bold mb-4">2. Frequent Circuit Breaker Trips</h2>
        <p className="mb-6">While a tripped breaker occasionally is normal, frequent occurrences suggest that your home's electrical system cannot handle the modern demand for power. See our <Link href="/electrical-services-in-nw2" className="text-primary hover:underline">all services</Link> page for how we can upgrade your consumer unit.</p>

        <h2 className="text-2xl font-bold mb-4">3. Flickering or Dimming Lights</h2>
        <p className="mb-6">This often indicates a loose connection somewhere in the circuit or a system that is struggling to maintain consistent voltage.</p>

        <h2 className="text-2xl font-bold mb-4">4. Discoloured or Warm Sockets</h2>
        <p className="mb-6">Discolouration (brown or black marks) on sockets is a clear sign of arcing and overheating. This requires immediate attention from a qualified electrician.</p>

        <h2 className="text-2xl font-bold mb-4">5. Green Residue in the Consumer Unit</h2>
        <p className="mb-6">Known as "green goo," this is a chemical reaction in old rubber-insulated cables. It can eventually cause serious damage and indicates the wiring is at the end of its life.</p>

        <div className="bg-primary/10 p-6 rounded-xl border border-primary/20 my-8">
          <h3 className="text-lg font-bold mb-2 text-gray-900">Worried about your wiring?</h3>
          <p className="mb-4 text-gray-600">A full rewire is a significant job, but it's the only way to ensure 100% safety for an older property. Contact Electric James for a professional assessment.</p>
          <Link href="/#contact" className="text-primary font-bold hover:underline">Get in touch →</Link>
        </div>
      </>
    ),
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) return { title: 'Blog Post Not Found' };

  return {
    title: `${post.title} | Blog | Electric James`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-16 bg-white">
      <article className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-bold tracking-wider uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-relaxed">
          {post.content}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Electrical Services in London</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Whether you need an EICR, a complete rewire, or simple safety advice, Electric James is here to help. Professional, reliable, and serving NW2 for years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:07825447057" className="btn btn-primary">
                Call 078 2544 7057
              </Link>
              <Link href="/#contact" className="btn btn-accent">
                Book an Inspection
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}
