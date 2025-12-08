import CleanLandingFeature from './CleanLandingFeature';
import MindfulWatchFeature from './MindfulWatchFeature';
import ShortsBlockerFeature from './ShortsBlockerFeature';
import SanitizedSearchFeature from './SanitizedSearchFeature';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">Designed for <span className="bg-gradient-to-r from-zinc-900 via-brand-red to-zinc-900 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x">Deep Work</span></h2>
          <p className="text-lg text-zinc-500">Every pixel is crafted to protect your attention span from algorithmic interference.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CleanLandingFeature />
          <MindfulWatchFeature />
          <ShortsBlockerFeature />
          <SanitizedSearchFeature />
        </div>
      </div>
    </section>
  );
};

export default Features;

