import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#C18BFC]/30 overflow-hidden"
    >
      {/* Gradient accent line that slides in on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C18BFC] via-[#BC3931] to-[#C18BFC] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3E8FF]/0 to-[#F3E8FF]/0 group-hover:from-[#F3E8FF]/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

      <div className="relative flex flex-col items-center text-center">
        {/* Icon with glow effect */}
        <div className="relative w-24 h-24 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_rgba(193,139,252,0.4)]">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3
          className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#BC3931] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Learn More with animated arrow */}
        <div className="flex items-center gap-2 text-[#BC3931] font-medium transition-all duration-300 group-hover:gap-3">
          Learn More
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
