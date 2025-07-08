import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MessageCircle, Mail, MapPin, Clock, Phone } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Get instant support on WhatsApp',
      contact: '+91-9828822111',
      link: 'https://wa.me/919828822111',
      color: 'bg-green-500',
      available: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us your queries via email',
      contact: 'contact@rentbee.in',
      link: 'mailto:contact@rentbee.in',
      color: 'bg-blue-500',
      available: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      description: 'Visit us at our office',
      contact: 'Pili Kothi, Ranibazar, Bikaner, Rajasthan',
      link: '#',
      color: 'bg-purple-500',
      available: 'Mon-Sat 9AM-6PM'
    }
  ];

  const faqs = [
    {
      question: 'How do I list my property?',
      answer: 'Simply send your property details, photos, and rental price to our WhatsApp number. Our team will verify and list it for free.'
    },
    {
      question: 'Is the service really free?',
      answer: 'Yes! Listing and finding properties through Rent Bee is completely free. We believe in making rental property management accessible to everyone.'
    },
    {
      question: 'How does property verification work?',
      answer: 'Our team verifies property details, ownership documents, and photos before listing. This ensures all listings are authentic and trustworthy.'
    },
    {
      question: 'Can I communicate directly with property owners?',
      answer: 'Absolutely! Once you find a property you like, you can contact the owner directly through WhatsApp for instant communication.'
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
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                We're here to help you with all your rental property needs
              </p>
              <div className="text-6xl mb-8 animate-float">📞</div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose your preferred method of communication
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div
                  key={method.title}
                  className="card-elegant text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {method.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  
                  <a
                    href={method.link}
                    target={method.title === 'WhatsApp' ? '_blank' : undefined}
                    rel={method.title === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    className="text-primary hover:underline font-semibold block mb-4"
                  >
                    {method.contact}
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{method.available}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="card-elegant animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="card-elegant text-center max-w-2xl mx-auto">
              <div className="text-4xl mb-4">🐝</div>
              <h2 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Don't hesitate to reach out. We're always happy to help!
              </p>
              <a
                href="https://wa.me/919828822111?text=Hi%20Rent%20Bee%20👋%2C%20I%20have%20a%20question%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;