import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle, Shield, Users, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Owner sends property on WhatsApp',
      description: 'Property owners share their listing details, photos, and rental information directly on our WhatsApp number.',
      image: '📱',
      details: [
        'Send property photos and details',
        'Include rental price and location',
        'Add contact information',
        'Mention property type and amenities'
      ]
    },
    {
      icon: Shield,
      number: '02',
      title: 'Rent Bee verifies and lists it',
      description: 'Our team quickly verifies all property details, photos, and ownership documents before listing.',
      image: '✅',
      details: [
        'Document verification process',
        'Property authenticity check',
        'Photo quality assessment',
        'Owner identity confirmation'
      ]
    },
    {
      icon: Users,
      number: '03',
      title: 'Tenant contacts via WhatsApp',
      description: 'Interested tenants connect directly with property owners through WhatsApp for instant communication.',
      image: '🏠',
      details: [
        'Direct communication with owner',
        'Schedule property visits',
        'Negotiate rental terms',
        'Complete rental agreement'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 lg:pt-24">
        {/* Hero Section */}
        <div className="bg-hero-gradient py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto animate-slide-up">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                How <span className="text-gradient">Rent Bee</span> Works
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Simple 3-step process to revolutionize your rental property experience
              </p>
              <div className="text-6xl mb-8 animate-float">🐝</div>
            </div>
          </div>
        </div>

        {/* Detailed Steps Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {/* Content */}
                  <div className="flex-1 animate-slide-up">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-primary-gradient rounded-full flex items-center justify-center shadow-elegant text-primary-foreground font-bold text-2xl">
                        {step.number}
                      </div>
                      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="card-elegant w-80 h-80 flex items-center justify-center animate-float" style={{ animationDelay: `${index * 2}s` }}>
                      <div className="text-8xl animate-pulse-glow">
                        {step.image}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-slide-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of property owners and tenants who trust Rent Bee
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
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;