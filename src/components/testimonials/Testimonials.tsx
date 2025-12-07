import TestimonialsHeader from './TestimonialsHeader';
import TestimonialCard from './TestimonialCard';

const reviews = [
  {
    name: "Akshat",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjW7iDks9xGHZlbEMT-aIFeJ6LLzRVvvhGbIetLsMZ7CJwkzhd0G=s48-w48-h48",
    text: "Helps me stay focused on my tasks and not let distractions get the better of me.",
    highlight: "Stay focused"
  },
  {
    name: "לירן בלומנברג",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUG8aqgMlvQklUzIIszUUbISA68WoByw6eX2-_fRtWGnVGOGvaeJw=s48-w48-h48",
    text: "Really clean and peaceful YouTube experience. No distractions, no endless scroll just the video I actually want to watch. Perfect for studying or focusing.",
    highlight: "Peaceful experience"
  },
  {
    name: "Yash",
    image: "https://lh3.googleusercontent.com/a/ACg8ocK9fYAD_zXtd4Z-AslhBBPr1b2kkgNM1_AzO3Ni1IwnkknYq1dozg=s48-w48-h48",
    text: "Helps me focus on Youtube properly. Earlier, I used to get lost in the endless recommendation loop. Now, I watch what I want, and exit YouTube before it's too late.",
    highlight: "Exit before it's too late"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <TestimonialsHeader />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <TestimonialCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

