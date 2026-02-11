
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
  'ev-charging-installation': {
    title: 'Complete Guide to EV Charging Installation at Home',
    description: 'Everything homeowners need to know about installing an electric vehicle charger. Costs, installation process, grants available, and choosing the right charger for your home.',
    date: 'February 5, 2026',
    category: 'EV & Energy',
    content: (
      <>
        <p className="mb-6 leading-relaxed">
          As more of us make the switch to electric vehicles, home charging has become essential. Rather than relying solely on public charging networks, installing a charger at home offers convenience, cost savings, and is often faster than public chargers. In this guide, we cover everything you need to know about residential EV charger installation.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Why Install a Home EV Charger?</h2>
        <p className="mb-6 leading-relaxed">
          There are several compelling reasons to invest in a home charger:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Convenience:</strong> Charge overnight while you sleep. Your car is ready every morning.</li>
          <li><strong>Cost Savings:</strong> Charging at home is significantly cheaper than public fast chargers, especially if you charge during off-peak hours.</li>
          <li><strong>Faster Charging:</strong> Home chargers can fully charge most EVs in 4-8 hours, much faster than a standard 3-pin socket.</li>
          <li><strong>Property Value:</strong> Properties with EV chargers are increasingly desirable to buyers.</li>
          <li><strong>Reliability:</strong> Not dependent on public charger availability or maintenance.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Types of EV Chargers</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-2">Slow Chargers (3kW)</h3>
            <p className="text-gray-600">Uses a standard 3-pin socket or dedicated 3kW supply. Charges full battery in 24-48 hours. Cheapest option, no installation needed, but slowest.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-2">Fast Chargers (7-22kW)</h3>
            <p className="text-gray-600">Most popular for home use. Requires dedicated circuit. Fully charges most EVs in 4-8 hours. This is what we typically install at UK homes.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="font-bold text-gray-900 mb-2">Rapid Chargers (>22kW)</h3>
            <p className="text-gray-600">Requires three-phase supply. Charges battery to 80% in 20-30 minutes. More suited to public charging networks or commercial use.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Is Your Home Ready for an EV Charger?</h2>
        <p className="mb-4 leading-relaxed">
          Before booking installation, check the following:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Off-Street Parking:</strong> You need a dedicated parking space with direct access. Chargers can't be strung across pavements.</li>
          <li><strong>Electrical Supply:</strong> Your home needs adequate electrical capacity. A 7-22kW charger requires a dedicated circuit.</li>
          <li><strong>Distance:</strong> Typical installation range is 5-15 meters from the fuse box. Longer distances may require upgrading your supply.</li>
          <li><strong>Planning Permission:</strong> Usually not needed for wall-mounted chargers on residential properties, but always worth checking with your local council.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Installation Process</h2>
        <p className="mb-6 leading-relaxed">
          A professional installation typically takes 1-2 days:
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex gap-4">
            <span className="text-primary font-bold text-lg">1.</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Electrical Inspection</h4>
              <p className="text-gray-600">We assess your current electrical system to ensure it can safely handle the charger demand.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold text-lg">2.</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Circuit Installation</h4>
              <p className="text-gray-600">If needed, we run a dedicated 32A or 63A circuit from your consumer unit to the charger location.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold text-lg">3.</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Charger Installation</h4>
              <p className="text-gray-600">We secure the charger to the wall or pedestal mount and connect it to the circuit.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-primary font-bold text-lg">4.</span>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Testing & Certification</h4>
              <p className="text-gray-600">The installation is tested and certified to Building Regulations. You'll receive an electrical safety certificate.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Costs & Grants</h2>
        <p className="mb-4 leading-relaxed">
          <strong>Installation Costs:</strong> £1,000 - £3,500 depending on the charger model and installation complexity. Fast chargers for new cars are typically around £1,500-£2,500 including installation.
        </p>
        <p className="mb-6 leading-relaxed">
          <strong>Government Grants:</strong> The Electric Vehicle Homecharge Scheme (EVHS) allows eligible homeowners to claim up to £350 toward the cost of a smart charger installation, even if you already have a charger. Check the low-carbon scheme to see if you qualify.
        </p>
        <p className="mb-6 leading-relaxed">
          <strong>Running Costs:</strong> An EV typically costs around 14-20p per mile to charge at home on standard rate, compared to 30-40p per mile for a petrol car. Charging during off-peak hours (Economy 7) can reduce this further.
        </p>

        <div className="bg-green-50 p-8 rounded-2xl border border-green-100 my-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Ready to Go Electric?</h3>
            <p className="mb-6 text-gray-700">Electric James specializes in EV charger installation across North West London. We'll handle the inspection, installation, testing, and all Building Regulations compliance.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/#contact" className="btn btn-primary shadow-lg">Book a Site Survey</Link>
              <Link href="tel:07825447057" className="btn btn-outline border-green-600 text-green-600 hover:bg-green-600 hover:text-white">Call for Quote</Link>
            </div>
          </div>
        </div>
      </>
    ),
  },
  'common-electrical-problems': {
    title: '7 Common Electrical Problems and How to Fix Them',
    description: 'Discover the most common electrical issues found in homes, what causes them, and whether you can safely fix them yourself or need to call a professional electrician.',
    date: 'February 3, 2026',
    category: 'Home Safety',
    content: (
      <>
        <p className="mb-6 leading-relaxed">
          Electrical problems are one of the most common issues homeowners face, and they can range from minor annoyances to serious fire hazards. Some you can fix yourself, but many require a qualified electrician. Let's walk through seven of the most common electrical problems we encounter at Electric James, what causes them, and what you should do about them.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Lights Flickering or Dimming</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          When lights flicker or dim unexpectedly, it usually means there's a fluctuation in voltage, often when you turn on a high-power appliance like a kettle, washing machine, or electric heater.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>Professional.</strong> Occasional dimming is normal, but persistent flickering suggests either a loose connection in your circuit or an overloaded circuit. Loose connections are a fire risk and need a qualified electrician to investigate.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Dead or Weak Outlets</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          A socket that doesn't work or doesn't hold plugs firmly is usually due to worn-out contacts inside the outlet or a tripped RCD.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>For the Brave:</strong> First, check if an RCD has tripped by pressing the test button on your consumer unit. If the socket still doesn't work after resetting, it needs replacing. Replacing an outlet is relatively straightforward if you're confident turning off power at the fuse box and using a screwdriver. If not, <strong>call a professional.</strong> Loose connections over time generate heat and can cause fires.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Circuit Breaker Keeps Tripping</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          Your breaker (or RCD) is doing its job—protecting you from electrical faults. It trips when too much current flows through a circuit or when it detects a fault.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>DIY First:</strong> Try removing some devices from that circuit. If it stops tripping, you've simply overloaded it. Use fewer appliances simultaneously. However, if <strong>it keeps tripping even with nothing plugged in</strong>, there's a fault in the wiring. <strong>Call an electrician immediately.</strong> This is a serious issue.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Burning Smell Near Outlets or Switches</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          A burning plastic smell is a sign of arcing—tiny electrical fires inside the outlet—or overheating wiring. This is a serious fire hazard.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>STOP! Turn off power immediately.</strong> Don't touch the outlet. Call an electrician right away. A burning smell means the insulation is breaking down inside the outlet or wall. This won't fix itself and requires immediate attention.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Light Switch Doesn't Work</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          Could be a burned-out bulb, a failed switch, or a wiring issue further back. It depends on whether it's just one light or a whole circuit.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Just the bulb?</strong> Try replacing it. Make sure it's the correct wattage.</li>
          <li><strong>Multiple lights on that circuit?</strong> Likely a tripped RCD. Check your consumer unit.</li>
          <li><strong>Just that switch?</strong> The switch itself probably needs replacing. <strong>Call a professional to do this safely.</strong></li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Not Enough Outlets</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          Modern homes have more electrical demands than older properties. You're relying on extension leads because there aren't enough outlets.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>Professional only.</strong> While it might be tempting to buy more extension leads, constantly using them is a fire risk. The proper solution is to have a qualified electrician install additional outlets where you need them. This might be a quick 30-minute job or part of a larger rewire, depending on your home's layout and age.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">7. High Electricity Bills</h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">What's Happening?</h3>
        <p className="mb-4 text-gray-600">
          Your bill might be high due to inefficient appliances, but electrical faults (especially arcing or poor earthing) can also waste energy.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">DIY or Professional?</h3>
        <p className="mb-6 text-gray-600">
          <strong>Check first:</strong> Look at your usage patterns and appliances. Modern items are usually efficient, but old heaters and large appliances consume power. If you suspect a fault, get an <strong>EICR (Electrical Installation Condition Report)</strong> to identify any problems in your wiring that might be causing energy loss.
        </p>

        <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100 my-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2 text-gray-900">When in Doubt, Call a Professional</h3>
            <p className="mb-6 text-gray-700">Electricity is dangerous. While some fixes are straightforward, most electrical problems require a qualified electrician. A DIY mistake can be fatal. Electric James offers fast diagnosis and repair of electrical faults across NW2 and North West London.</p>
            <Link href="/#contact" className="btn btn-primary inline-block shadow-lg">
              Book a Diagnostic Visit
            </Link>
          </div>
        </div>
      </>
    ),
  },
  'pat-testing-guide': {
    title: 'What Every Business Owner Needs to Know About PAT Testing',
    description: 'PAT testing is a legal requirement for businesses. Learn what it is, why it matters, how often you need it, and what to expect during the testing process.',
    date: 'January 20, 2026',
    category: 'Business',
    content: (
      <>
        <p className="mb-6 leading-relaxed">
          If you own or manage a business with electrical equipment, you've likely heard the term "PAT testing." It's become an acronym floating around health and safety discussions, but not all businesses understand why it's important or what it actually involves. This guide covers everything business owners need to know about PAT testing.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is PAT Testing?</h2>
        <p className="mb-6 leading-relaxed">
          PAT stands for <strong>Portable Appliance Testing</strong>. It's a procedure involving both visual inspection and electrical testing of portable electrical appliances and equipment to ensure they are safe to use. "Portable" here means anything that isn't fixed to the building—computers, printers, microwaves, fans, power tools, chargers, office equipment, etc.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Is PAT Testing a Legal Requirement?</h2>
        <p className="mb-6 leading-relaxed">
          <strong>Yes and no.</strong> PAT testing is not explicitly mandated by a single law, but it is a requirement under multiple regulations including:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Health and Safety at Work Act 1974:</strong> Requires employers to ensure the health and safety of employees and visitors.</li>
          <li><strong>Electricity at Work Regulations 1989:</strong> Requires electrical equipment to be maintained in a safe condition.</li>
          <li><strong>Management of Health and Safety at Work Regulations 1999:</strong> Requires risk assessments of workplace hazards, including electrical safety.</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          PAT testing is the standard method businesses use to demonstrate compliance with these regulations. If an employee is injured by faulty equipment and it's discovered you haven't been testing appliances, your liability is significant.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Who Needs PAT Testing?</h2>
        <p className="mb-6 leading-relaxed">
          Most businesses need PAT testing, including:
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-2">Typically Required</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Offices</li>
              <li>• Shops</li>
              <li>• Restaurants & Cafés</li>
              <li>• Gyms & Leisure Facilities</li>
              <li>• Workshops & Garages</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h4 className="font-bold text-gray-900 mb-2">Special Consideration</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Building Sites</li>
              <li>• Industrial Facilities</li>
              <li>• Schools & Universities</li>
              <li>• Hospitals</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">How Often Do You Need PAT Testing?</h2>
        <p className="mb-6 leading-relaxed">
          There's no single prescribed frequency—it depends on the type of business, the equipment, and how heavily it's used. However, general guidelines are:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Office Environments:</strong> Annually (or every 2 years if the equipment is low-risk).</li>
          <li><strong>Workshops & Industrial:</strong> Every 6-12 months. More frequent if equipment receives heavy use.</li>
          <li><strong>Construction Sites:</strong> Every 3 months due to harsh conditions and equipment stress.</li>
          <li><strong>Hotels & Hospitality:</strong> Annually, especially for high-guest-turnover kitchens and laundries.</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          The key is maintaining a <strong>risk-based approach</strong>. A professional PAT testing company can assess your specific situation and recommend a testing schedule.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What Happens During a PAT Test?</h2>
        <p className="mb-6 leading-relaxed">
          A PAT test involves two main activities:
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">Visual Inspection</h3>
        <p className="mb-6 text-gray-600">
          The tester examines the equipment for obvious damage, wear, or hazards:
          <br /><br />
          • Is the cable intact with no cuts or splits?
          <br />
          • Are the pins on the plug damaged?
          <br />
          • Is the equipment clean and free from damage?
          <br />
          • Are there any burn marks or discoloration?
          <br />
          <br />
          If visual inspection fails, the tester will stop and label the item as "Failed" without proceeding to electrical testing.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">Electrical Testing</h3>
        <p className="mb-6 text-gray-600">
          Using a portable appliance tester (a specialized meter), the tester checks:
          <br /><br />
          • <strong>Continuity:</strong> Earth protection is working correctly.
          <br />
          • <strong>Insulation:</strong> Electrical insulation meets safety standards.
          <br />
          • <strong>Leakage Current:</strong> No dangerous current is escaping from the equipment.
          <br />
          <br />
          Each appliance is labeled with a sticker showing the test date and next due date. Items that fail are removed from service immediately.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What Gets Tested?</h2>
        <p className="mb-4 leading-relaxed">
          Anything that's plugged in or battery-powered qualifies:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li>Computers, monitors, and peripherals</li>
          <li>Printers and copiers</li>
          <li>Coffee machines and kettles</li>
          <li>Fans and heaters</li>
          <li>Extension leads and power strips</li>
          <li>Power tools</li>
          <li>Chargers for phones and devices</li>
          <li>Microwave ovens</li>
          <li>Washing machines and dryers</li>
        </ul>
        <p className="mb-6 leading-relaxed">
          <strong>Note:</strong> Fixed appliances (built into the building) are covered by different regulations and don't need PAT testing. However, the fixed wiring itself needs regular inspection via an EICR.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">The Cost of PAT Testing</h2>
        <p className="mb-6 leading-relaxed">
          PAT testing is relatively inexpensive compared to the liability of an accident. Typical costs are:
          <br /><br />
          <strong>• Individual appliance:</strong> £1-3 per item
          <br />
          <strong>• Small office (20-30 items):</strong> £50-100
          <br />
          <strong>• Medium business (100+ items):</strong> £150-300
          <br />
          <strong>• Large industrial site:</strong> Custom quote
          <br />
          <br />
          Many testing companies offer annual maintenance contracts at discounted rates.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">What Happens if You Don't Do PAT Testing?</h2>
        <p className="mb-6 leading-relaxed">
          The risks include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
          <li><strong>Legal Liability:</strong> If someone is injured, the HSE can prosecute. Fines have reached £20,000+ for serious breaches.</li>
          <li><strong>Insurance Issues:</strong> Many business insurance policies exclude claims if you haven't maintained electrical safety standards.</li>
          <li><strong>Reputation Damage:</strong> Being prosecuted for health and safety violations damages your business reputation.</li>
          <li><strong>Human Cost:</strong> Electrical hazards can cause serious injury or death.</li>
        </ul>

        <div className="bg-slate-900 text-white p-8 rounded-2xl my-10 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Professional PAT Testing for Your Business</h3>
            <p className="mb-6 opacity-90">Electric James provides comprehensive PAT testing services across London and North West London. We test your equipment, label it, and provide documentation for compliance. We can also help you establish a testing schedule tailored to your business type.</p>
            <Link href="/#contact" className="btn btn-accent inline-block">
              Get a Free Quote
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-gray-900">Final Thoughts</h2>
        <p className="mb-6 leading-relaxed">
          PAT testing is a straightforward, affordable way to protect your employees, customers, and your business from electrical hazards. It's not just about compliance—it's about ensuring everyone who enters your workplace is safe. If you haven't had your appliances tested recently, now is the time to do it.
        </p>
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
