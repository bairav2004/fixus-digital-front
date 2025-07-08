
import { Mail, Phone, MapPin, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";

export const Contact = () => {
  const handleSocialClick = (platform: string, url: string) => {
    window.open(url, '_blank');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Let's connect and discuss your project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@fixus.com</p>
                      <p className="text-muted-foreground">support@fixus.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">123 Tech Street</p>
                      <p className="text-muted-foreground">San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl p-8 shadow-lg border">
                <h4 className="font-semibold text-card-foreground mb-4">Business Hours</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & CTA */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 shadow-lg border">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Connect With Us
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <button
                    onClick={() => handleSocialClick('instagram', 'https://instagram.com/fixus')}
                    className="flex flex-col items-center p-4 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <Instagram className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Instagram</span>
                  </button>

                  <button
                    onClick={() => handleSocialClick('linkedin', 'https://linkedin.com/company/fixus')}
                    className="flex flex-col items-center p-4 bg-blue-600 text-white rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <Linkedin className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </button>

                  <button
                    onClick={() => handleSocialClick('github', 'https://github.com/fixus')}
                    className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
                  >
                    <Github className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">GitHub</span>
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    Ready to start your project?
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-lg">
                <h4 className="text-xl font-bold mb-4">Let's Build Something Amazing</h4>
                <p className="mb-6 opacity-90">
                  From concept to deployment, we're here to bring your vision to life with cutting-edge technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@fixus.com"
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium transition-colors duration-200"
                  >
                    Send Email
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-4 py-3 text-center font-medium transition-colors duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-200 z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </section>
  );
};
