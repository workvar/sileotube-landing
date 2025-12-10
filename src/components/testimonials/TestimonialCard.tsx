'use client';

import { Star, Quote } from 'lucide-react';
import { BROWSER_LOGOS } from '@/constants';

interface Review {
  name: string;
  image: string;
  text: string;
  highlight: string;
  source: string;
}

interface TestimonialCardProps {
  review: Review;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ review }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform translate-y-2 translate-x-2 border border-zinc-100 transition-transform duration-300 group-hover:translate-y-3 group-hover:translate-x-3"></div>
      <div className="relative bg-white p-8 rounded-3xl border border-zinc-100 h-full flex flex-col shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
        <div className="mb-6 flex justify-between items-start">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-brand-red text-brand-red" />
            ))}
          </div>
          <Quote size={24} className="text-zinc-100 fill-zinc-100" />
        </div>

        <h3 className="text-lg font-bold text-zinc-900 mb-2">{review.highlight}</h3>
        <p className="text-zinc-600 text-sm leading-7 mb-8 flex-grow">"{review.text}"</p>
        
        <div className="flex items-center gap-3 pt-6 border-t border-zinc-50">
          <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm grayscale group-hover:grayscale-0 transition-all" />
          <div>
            <div className="text-zinc-900 font-bold text-sm">{review.name}</div>
            <div className="text-zinc-400 text-xs flex items-center gap-1">
              {(() => {
                const storeSrcMap: { [key: string]: { src: string; alt: string } } = {
                  chrome: {
                    src: BROWSER_LOGOS.chrome,
                    alt: "Chrome Web Store"
                  },
                  edge: {
                    src: BROWSER_LOGOS.edge,
                    alt: "Edge Add-ons"
                  },
                  firefox: {
                    src: BROWSER_LOGOS.firefox,
                    alt: "Firefox Add-ons"
                  },
                };

                const lowerSource = review.source.toLowerCase();
                let storeLogo = null;

                if (lowerSource.includes('chrome')) {
                  storeLogo = storeSrcMap.chrome;
                } else if (lowerSource.includes('edge')) {
                  storeLogo = storeSrcMap.edge;
                } else if (lowerSource.includes('firefox')) {
                  storeLogo = storeSrcMap.firefox;
                }

                return storeLogo ? (
                  <img
                    src={storeLogo.src}
                    alt={storeLogo.alt}
                    className="w-4 h-4 rounded-sm"
                  />
                ) : null;
              })()}
              {review.source}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

