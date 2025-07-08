import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppButton />
      
      <main className="pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Last Updated: 03 June 2025
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card space-y-8">
                <p className="text-lg leading-relaxed">
                  Rent Bee ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, mobile application, or services.
                </p>

                <p className="text-lg leading-relaxed">
                  By accessing or using our platform, you agree to this Privacy Policy. If you do not agree, please do not use our services.
                </p>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold mb-3 text-foreground">a. Personal Information:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Identity verification documents (if applicable)</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">b. Property Listing Information:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Property address</li>
                    <li>Rent price and availability</li>
                    <li>Photos, videos, and descriptions</li>
                    <li>Property type and amenities</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">c. Automatically Collected Information:</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>IP address and location data</li>
                    <li>Browser type and device data</li>
                    <li>Log data and access times</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Facilitate property listing and discovery</li>
                    <li>Verify user identity and prevent fraud</li>
                    <li>Provide customer support</li>
                    <li>Send important notifications and alerts</li>
                    <li>Improve our website, services, and user experience</li>
                    <li>Comply with applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Sharing of Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We do not sell your personal data. We may share your information with:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Service providers (e.g., hosting, cloud storage, communication tools)</li>
                    <li>Law enforcement, government authorities, or other third parties if required by law</li>
                    <li>Other users, with your permission (e.g., when you initiate a conversation or booking)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Your Rights and Choices</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access and update your personal information</li>
                    <li>Request deletion of your account and data</li>
                    <li>Opt out of non-essential marketing communications</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    Please contact us at <a href="mailto:contact@rentbee.in" className="text-primary hover:underline">contact@rentbee.in</a> for any such requests.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies & Tracking</h2>
                  <p className="text-muted-foreground mb-4">Rent Bee uses cookies to:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Understand user behavior</li>
                    <li>Save user preferences</li>
                    <li>Improve the speed and functionality of our platform</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You may control or delete cookies via your browser settings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Data Security</h2>
                  <p className="text-muted-foreground mb-4">
                    We implement appropriate technical and organizational security measures to protect your data, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>SSL encryption</li>
                    <li>Secure user authentication</li>
                    <li>Regular backups and vulnerability scans</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Data Retention</h2>
                  <p className="text-muted-foreground">
                    We retain personal data only as long as necessary to provide services or as required by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children's Privacy</h2>
                  <p className="text-muted-foreground">
                    Our platform is not intended for individuals under the age of 18. We do not knowingly collect data from minors.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Changes to This Policy</h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy occasionally. Changes will be posted with the revised date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Contact Us</h2>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
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

export default PrivacyPolicy;