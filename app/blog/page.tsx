
import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Electrical Safety Blog | Expert Tips & Advice | Electric James',
  description: 'Read the latest news, electrical safety tips, and advice from Electric James. Expert electricians serving NW2 and surrounding areas.',
};

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Electrical Safety Tips for Homeowners',
      excerpt: 'Learn essential electrical safety tips to keep your family and home safe from electrical hazards.',
      date: 'January 28, 2026',
      slug: 'electrical-safety-tips',
    },
    {
      id: 2,
      title: 'Complete Guide to EICR Certificates: Costs, Rules & Safety',
      excerpt: 'Everything you need to know about Electrical Installation Condition Reports (EICR). Costs, legal requirements for landlords, and what occurs during the test.',
      date: 'January 15, 2026',
      slug: 'importance-of-eicr',
    },
    {
      id: 3,
      title: '5 Critical Signs Your House Needs Rewiring',
      excerpt: 'Is your home electrical wiring safe? Discover the 5 critical signs that indicate your property needs a rewire, the costs involved, and the benefits.',
      date: 'December 10, 2025',
      slug: 'signs-you-need-rewire',
    },
    {
      id: 4,
      title: 'Complete Guide to EV Charging Installation at Home',
      excerpt: 'Everything homeowners need to know about installing an electric vehicle charger. Costs, installation process, grants, and choosing the right charger for your needs.',
      date: 'February 5, 2026',
      slug: 'ev-charging-installation',
    },
    {
      id: 5,
      title: '7 Common Electrical Problems and How to Fix Them',
      excerpt: 'Discover the most common electrical issues in homes, what causes them, and whether you can fix them yourself or need a professional electrician.',
      date: 'February 3, 2026',
      slug: 'common-electrical-problems',
    },
    {
      id: 6,
      title: 'What Every Business Owner Needs to Know About PAT Testing',
      excerpt: 'PAT testing is a legal requirement for businesses. Learn what it is, why it matters, how often you need it, and what to expect during the process.',
      date: 'January 20, 2026',
      slug: 'pat-testing-guide',
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Latest News & Insights
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Stay up to date with the latest electrical safety advice, industry news, and updates from Electric James.
          </p>

          <div className="grid gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Article
                  </span>
                  <span className="text-slate-400 text-sm ml-4">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Read Article
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-500">
            <p>More articles coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
