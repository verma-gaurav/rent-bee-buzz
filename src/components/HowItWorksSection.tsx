import { MessageCircle, Shield, Users } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Owner sends property on WhatsApp',
      description: 'Property owners share their listing details, photos, and rental information directly on our WhatsApp number.',
      image: '📱'
    },
    {
      icon: Shield,
      number: '02',
      title: 'Rent Bee verifies and lists it',
      description: 'Our team quickly verifies all property details, photos, and ownership documents before listing.',
      image: '✅'
    },
    {
      icon: Users,
      number: '03',
      title: 'Tenant contacts via WhatsApp',
      description: 'Interested tenants connect directly with property owners through WhatsApp for instant communication.',
      image: '🏠'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            How <span className="text-gradient">Rent Bee</span> Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple 3-step process to list or find your perfect rental property
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Card */}
                <div className="card-elegant text-center relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center shadow-elegant text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-8">
                    {/* Emoji Illustration */}
                    <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${index * 2}s` }}>
                      {step.image}
                    </div>

                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the easiest way to manage rentals?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919828822111?text=Hi%20Rent%20Bee%20👋%2C%20I%20want%20to%20list%20my%20property%20for%20rent."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>List Your Property</span>
            </a>
            <a
              href="https://wa.me/919828822111?text=Hi%20Rent%20Bee%20👋%2C%20I%20am%20looking%20for%20a%20rental%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Find Property</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;