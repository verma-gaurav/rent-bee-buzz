import { MessageCircle, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/66628796-30ec-4359-bc8b-a8932307b5ba.png" 
                alt="Rent Bee Logo" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-primary">Rent Bee</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              The easiest way to manage rental properties entirely on WhatsApp. 
              List or find properties for free with verified listings and instant communication.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919828822111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="/#how-it-works" 
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">Email</p>
                  <a 
                    href="mailto:contact@rentbee.in" 
                    className="text-primary hover:underline"
                  >
                    contact@rentbee.in
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">WhatsApp</p>
                  <a 
                    href="https://wa.me/919828822111" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    +91-9828822111
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-secondary-foreground/80">Address</p>
                  <p className="text-secondary-foreground/60 text-sm">
                    Pili Kothi, Ranibazar<br />
                    Bikaner, Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © 2025 Rent Bee. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;