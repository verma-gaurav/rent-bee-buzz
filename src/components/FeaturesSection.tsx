import { MessageCircle, Home, Shield, Clock, CheckCircle, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Home,
      title: 'List Property on WhatsApp',
      description: 'Share your property details directly on WhatsApp - completely free',
      highlight: 'Free'
    },
    {
      icon: MessageCircle,
      title: 'Find Property on WhatsApp',
      description: 'Search and connect with property owners instantly via WhatsApp',
      highlight: 'Free'
    },
    {
      icon: Smartphone,
      title: 'No App or Website Required',
      description: 'Everything happens on WhatsApp - the app you already use daily',
      highlight: 'Simple'
    },
    {
      icon: Shield,
      title: 'Verified Listings Only',
      description: 'All properties are verified by our team before listing',
      highlight: 'Verified'
    },
    {
      icon: Clock,
      title: 'Fast and Easy Process',
      description: 'Get listed or find properties within minutes, not days',
      highlight: 'Quick'
    },
    {
      icon: CheckCircle,
      title: 'Trusted Platform',
      description: 'Join thousands of satisfied property owners and tenants',
      highlight: 'Trusted'
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">Rent Bee</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            The simplest way to manage rental properties with the power of WhatsApp
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-hero-gradient rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of property owners and tenants who trust Rent Bee for their rental needs
            </p>
            <a
              href="https://wa.me/919828822111?text=Hi%20Rent%20Bee%20👋%2C%20I%20visited%20your%20website%20and%20want%20to%20get%20started."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero inline-flex items-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Start on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;