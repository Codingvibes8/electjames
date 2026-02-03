
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
        <p className="mb-6 leading-relaxed">
          Electrical safety is paramount for every homeowner. While electricity is essential for modern living, it can also be a hidden danger if not treated with respect. At Electric James, we see the results of poor electrical maintenance all too often. Prevention is always better (and cheaper) than the cure.
        </p>
        <p className="mb-8 leading-relaxed">
          Here are our top electrical safety tips to help you keep your home and family safe in NW2 and across London.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Test Your RCDs (Safety Switches)</h2>
        <p className="mb-6 leading-relaxed">
          Your consumer unit (fuse box) should be equipped with Residual Current Devices (RCDs). These are life-saving devices designed to switch off the electricity automatically if there is a fault. However, they need to be tested regularly to ensure they are working correctly.
        </p>
        <p className="mb-6 leading-relaxed">
          <strong>Tip:</strong> Press the 'Test' (T) button on your RCDs at least once every three months. If it doesn't trip the switch immediately, you need to call an electrician right away.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Watch Out for Overheating Signals</h2>
        <p className="mb-6 leading-relaxed">
          Your electrical system often gives you warning signs before a major failure. Recognizing these early can prevent fires.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Smell:</strong> A persistent fishy or burning plastic smell is a classic sign of overheating wiring or accessories.</li>
          <li><strong>Sight:</strong> Discolouration (brown/black marks) around sockets or light switches indicates arcing.</li>
          <li><strong>Touch:</strong> Cover plates should not be warm to the touch.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Be Smart with Extension Leads</h2>
        <p className="mb-6 leading-relaxed">
          Extension leads are temporary solutions, not permanent fixtures. Overloading them is a common cause of household fires.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>Never "daisy-chain" extension leads (plugging one into another).</li>
          <li>Check the current rating of the lead before plugging in high-power appliances like heaters or kettles.</li>
          <li>Unwind cable reels fully before use to prevent them from overheating.</li>
        </ul>
        <p className="mb-6">
          If you rely heavily on extension cords, you probably need more sockets installed. <Link href="/#contact" className="text-primary hover:underline font-medium">Contact us</Link> for a quote on adding extra points.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Don't DIY with Electricity</h2>
        <p className="mb-6 leading-relaxed">
          It might be tempting to fix a light switch or replace a socket yourself to save money, but DIY electrical work is dangerous and often illegal. Part P of the Building Regulations requires most electrical work in homes to be carried out/certified by a registered electrician.
        </p>
        <p className="mb-6 leading-relaxed">
          Bad wiring can be fatal. Always use a registered professional like Electric James for your peace of mind and safety.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Childproof Your Outlets</h2>
        <p className="mb-6 leading-relaxed">
          If you have young children, ensure that your sockets are safe. While modern UK sockets have built-in shutters, it's vital to educate children about the dangers of electricity. Ensure cords are kept out of reach so they cannot be pulled, bringing heavy appliances down.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Schedule Regular Inspections</h2>
        <p className="mb-6 leading-relaxed">
          Just like an MOT for your car, your home's electrics need a check-up. Ideally, homeowners should have an EICR (Electrical Installation Condition Report) every 10 years. If you are a landlord, this is a legal requirement every 5 years.
        </p>

        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 my-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Is Your Home Safe?</h3>
            <p className="mb-6 text-gray-700">Don't leave it to chance. If you have noticed any of the warning signs above, or if your home hasn't been inspected in over 10 years, book a safety check today.</p>
            <Link href="/#contact" className="btn btn-primary inline-flex shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              Book a Safety Inspection
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
      </>
    ),
  },
  'importance-of-eicr': {
    title: 'Complete Guide to EICR Certificates: Costs, Rules & Safety',
    description: 'Everything you need to know about Electrical Installation Condition Reports (EICR). Costs, legal requirements for landlords, and what the test involves.',
    date: 'January 15, 2026',
    category: 'Landlord Advice',
    content: (
      <>
        <p className="mb-6 leading-relaxed">
          Whether you are a landlord, a homeowner buying a new property, or simply concerned about the safety of your current electrical installation, understanding the Electrical Installation Condition Report (EICR) is crucial. In this comprehensive guide, we cover everything from legal requirements to what actually happens during the test.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is an EICR?</h2>
        <p className="mb-6 leading-relaxed">
          An EICR (Electrical Installation Condition Report) is essentially an MOT for your home's electrical system. It is an in-depth inspection carried out by a qualified electrician to assess the condition of an existing electrical installation. The goal is to identify any damage, deterioration, defects, or dangerous conditions that could cause electric shocks or high temperatures which can result in fires.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Who Needs an EICR and How Often?</h2>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-8">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-bold text-gray-900 w-32 shrink-0">Landlords:</span>
              <span className="text-gray-600"><strong>Legally required every 5 years</strong> (or at change of tenancy). You must provide a copy of the report to your tenants.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-gray-900 w-32 shrink-0">Homeowners:</span>
              <span className="text-gray-600">Recommended every 10 years. Also highly recommended when buying a property to avoid nasty surprises.</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold text-gray-900 w-32 shrink-0">Businesses:</span>
              <span className="text-gray-600">Typically every 5 years, depending on the type of premises.</span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What Happens During the Test?</h2>
        <p className="mb-4 leading-relaxed">
          During the inspection, the electrician will check the condition of your electrical installation against the UK standard for safety (BS 7671). The test involves both visual inspection and live/dead testing. We check for:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Adequacy of earthing and bonding:</strong> Essential for safety during a fault.</li>
          <li><strong>Suitability of the switchgear:</strong> Is your consumer unit (fuse box) up to date?</li>
          <li><strong>Serviceability of equipment:</strong> Switches, sockets, and light fittings.</li>
          <li><strong>Type of wiring system:</strong> Old rubber or lead cables need replacing.</li>
          <li><strong>Extent of wear and tear:</strong> Damage or deterioration.</li>
          <li><strong>Changes in use:</strong> Which might have led to unsafe conditions.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Your EICR Codes</h2>
        <p className="mb-4 leading-relaxed">
          Your report will classify the installation as "Satisfactory" or "Unsatisfactory". Issues are coded by severity:
        </p>
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <h4 className="font-bold text-red-700 mb-2">Code C1</h4>
            <p className="text-sm text-red-600"><strong>Danger Present.</strong> Risk of injury. Immediate remedial action required.</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <h4 className="font-bold text-orange-700 mb-2">Code C2</h4>
            <p className="text-sm text-orange-600"><strong>Potentially Dangerous.</strong> Urgent remedial action required.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h4 className="font-bold text-yellow-700 mb-2">Code C3</h4>
            <p className="text-sm text-yellow-600"><strong>Improvement Recommended.</strong> Non-compliant with latest regs, but not immediately dangerous.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Electric James?</h2>
        <p className="mb-6 leading-relaxed">
          We provide thorough, honest inspections. Unlike some large agencies that rush the job (20-minute checks are impossible!), we take the time to inspect properly. We cover NW2, Cricklewood, Willesden Green, and surrounding London areas.
        </p>

        <div className="bg-slate-900 text-white p-8 rounded-2xl my-8">
          <h3 className="text-xl font-bold mb-2">Need an EICR Certificate in London?</h3>
          <p className="mb-6 opacity-90">Book your inspection today. Clear pricing, detailed reports, and fast turnaround for landlords.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#contact" className="btn btn-accent inline-block">Order an EICR</Link>
            <Link href="tel:07825447057" className="btn btn-outline text-white border-white hover:bg-white hover:text-slate-900">Call 078 2544 7057</Link>
          </div>
        </div>
      </>
    ),
  },
  'signs-you-need-rewire': {
    title: '5 Critical Signs Your House Needs Rewiring',
    description: 'Is your home electrical wiring safe? Discover the 5 critical signs that you need a rewire, the costs involved, and the benefits of upgrading.',
    date: 'December 10, 2025',
    category: 'Home Renovation',
    content: (
      <>
        <p className="mb-6 leading-relaxed">
          Rewiring a house is a significant undertaking, but it is also one of the most important investments you can make for your property's safety and value. Old, deteriorating wiring is a leading cause of house fires in the UK. But how do you know when it's time to take the plunge?
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">The 25-Year Rule</h2>
        <p className="mb-6 leading-relaxed">
          As a general rule, if a property hasn't been rewired in the last 25-30 years, it will likely need upgrading to meet modern standards. The demands we place on our electrical systems today—with high-power appliances, computers, and EV chargers—are completely different from 30 years ago.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">5 Warning Signs You Can't Ignore</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xl">1</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Persistent Burning Smell</h3>
              <p className="text-gray-600">If you can't find the source of a burning smell, it could be your wiring arcing inside the walls. This is an immediate fire hazard.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xl">2</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discoloured Sockets & Switches</h3>
              <p className="text-gray-600">Brown or scorching marks around your outlets are signs of tiny electrical fires happening inside the accessory. They need replacing immediately, but often point to wider wiring issues.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xl">3</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fuses Blowing Regularly</h3>
              <p className="text-gray-600">If you have an old fuse box with rewireable fuses that blow often, or a modern breaker that keeps tripping, your circuits are overloaded or faulty.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xl">4</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Green Goo</h3>
              <p className="text-gray-600">A green, sticky substance around your fittings is a chemical reaction from old PVC reacting with the copper wire. It means your insulation is breaking down.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-xl">5</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lack of Sockets</h3>
              <p className="text-gray-600">Are you relying on extension leads for everything? Daisy-chaining extension leads is dangerous. Rewiring lets you put sockets exactly where you need them.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Partial vs. Full Rewire</h2>
        <p className="mb-4 leading-relaxed">
          You don't always need to rip everything out.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Full Rewire:</strong> Replaces 100% of the cabling, accessories, and consumer unit. Best for empty properties or during major renovations.</li>
          <li><strong>Partial Rewire:</strong> Updating just one circuit (e.g., kitchen) or adding new circuits while leaving safe existing wiring in place.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">The Benefits of Rewiring</h2>
        <p className="mb-6 leading-relaxed">
          It's not just about safety. A rewire is your chance to modernize your home.
          <br /><br />
          ✨ <strong>Smart Home Ready:</strong> Install neutral wires at light switches for smart lighting.
          <br />
          🔌 <strong>More Power:</strong> Add USB sockets, dedicated cooker circuits, and outdoor power.
          <br />
          💡 <strong>Better Lighting:</strong> Upgrade to energy-efficient LED downlights.
        </p>

        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/20 my-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-3 text-gray-900">Thinking about a Rewire in NW2?</h3>
            <p className="mb-6 text-gray-700">Don't guess with safety. We offer free visual inspections and quotes for full and partial rewires in North West London.</p>
            <div className="flex gap-4">
              <Link href="/#contact" className="btn btn-primary shadow-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
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
