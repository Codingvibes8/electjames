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
    <Link href={href} className="card group">
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="relative w-24 h-24 mb-4 transition-transform group-hover:scale-110">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
