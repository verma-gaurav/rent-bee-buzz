import { MessageCircle, Search, Home } from 'lucide-react';

const HeroSection = () => {
  const listPropertyUrl = `https://wa.me/919828822111?text=${encodeURIComponent('Hi Rent Bee 👋, I want to list my property for rent.')}`;
  const findPropertyUrl = `https://wa.me/919828822111?text=${encodeURIComponent('Hi Rent Bee 👋, I am looking for a rental property.')}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Home className="h-12 w-12 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
          <MessageCircle className="h-16 w-16 text-primary/20" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Search className="h-10 w-10 text-primary/25" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Manage Your Rental Property{' '}
                <span className="text-gradient">Entirely on WhatsApp</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                List or find rental properties, completely free – directly through WhatsApp!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={listPropertyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center justify-center space-x-2"
              >
                <Home className="h-5 w-5" />
                <span>List Property</span>
              </a>
              <a
                href={findPropertyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center justify-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Find Property</span>
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>100% Free</span>
              </div>
              <div className="w-px h-4 bg-border"></div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span>Verified Listings</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-secondary rounded-3xl p-4 shadow-2xl animate-float">
                <div className="bg-card rounded-2xl p-4 w-80 h-96">
                  {/* WhatsApp Header */}
                  <div className="flex items-center space-x-3 bg-green-500 text-white p-3 rounded-t-xl -m-4 mb-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/66628796-30ec-4359-bc8b-a8932307b5ba.png" 
                        alt="Rent Bee" 
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Rent Bee</p>
                      <p className="text-xs opacity-90">Online</p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm">Hi! I want to list my 2BHK apartment for rent in Bikaner.</p>
                    </div>
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg rounded-tr-none max-w-xs ml-auto">
                      <p className="text-sm">Great! Please share property details, photos, and rent amount. We'll verify and list it for free! 🏠</p>
                    </div>
                    <div className="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
                      <p className="text-sm">Awesome! Sending details now...</p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="mt-4 flex items-center space-x-2 text-muted-foreground text-xs">
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span>Rent Bee is typing...</span>
                  </div>
                </div>
              </div>

              {/* Floating Chat Bubble */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-2 rounded-full shadow-lg animate-bounce">
                <MessageCircle className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;