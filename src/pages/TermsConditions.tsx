import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const TermsConditions = () => {
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
                Terms & <span className="text-gradient">Conditions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
                Last Updated: 03 June 2025
              </p>
              <div className="text-6xl mb-8 animate-float">📋</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">

            <div className="prose prose-lg max-w-none">
              <div className="card-elegant space-y-8 animate-slide-up">
                <p className="text-lg leading-relaxed">
                  Welcome to Rent Bee. These Terms & Conditions ("Terms") govern your access to and use of our platform, services, and content. By using Rent Bee, you agree to comply with and be bound by these Terms. If you do not agree, you may not use our platform.
                </p>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Definitions</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>"User" refers to any person accessing or using our platform.</li>
                    <li>"Lister" refers to users who post property listings.</li>
                    <li>"Seeker" refers to users searching for rental properties.</li>
                    <li>"Platform" refers to the Rent Bee website and app.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Eligibility</h2>
                  <p className="text-muted-foreground">
                    You must be at least 18 years old to use Rent Bee. By using our platform, you confirm that you meet this requirement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. User Accounts</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Users must provide accurate and complete information.</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You agree not to impersonate anyone or provide false information.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Property Listings</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Listers must ensure all property details are accurate and lawful.</li>
                    <li>Rent Bee reserves the right to remove or edit listings that violate our policies.</li>
                    <li>Properties must comply with all local laws and rental regulations.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Prohibited Activities</h2>
                  <p className="text-muted-foreground mb-4">You agree NOT to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Post false, misleading, or fraudulent information</li>
                    <li>Harass, abuse, or harm others</li>
                    <li>Upload viruses or harmful code</li>
                    <li>Interfere with the platform's integrity or operation</li>
                    <li>Use automated bots to scrape or access data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Fees and Payments</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Rent Bee may charge service fees for premium features (if applicable).</li>
                    <li>All fees will be clearly disclosed prior to purchase.</li>
                    <li>Payment processing may be handled by third-party providers.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Limitation of Liability</h2>
                  <p className="text-muted-foreground mb-4">Rent Bee is not responsible for:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>The accuracy of listings</li>
                    <li>The actions or behavior of users (listers or seekers)</li>
                    <li>Any loss, damage, or disputes arising from property transactions</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Our liability is limited to the maximum extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    All content on the platform, including logos, text, and graphics, is the property of Rent Bee and protected by intellectual property laws. Users may not copy or distribute any part of the platform without permission.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Termination</h2>
                  <p className="text-muted-foreground mb-4">We may terminate your access if:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>You violate these Terms</li>
                    <li>You engage in fraudulent or harmful behavior</li>
                    <li>We are required by law</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Modifications</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the new Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law</h2>
                  <p className="text-muted-foreground">
                    These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bikaner, Rajasthan.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Contact Us</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📧 Email: <a href="mailto:contact@rentbee.in" className="text-primary hover:underline">contact@rentbee.in</a></p>
                    <p>📍 Address: Pili Kothi, Ranibazar, Bikaner, Rajasthan</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;