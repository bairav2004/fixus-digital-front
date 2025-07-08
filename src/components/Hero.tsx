
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, ShoppingCart } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with 
                <span className="text-blue-600"> Digital Excellence</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                FIXUS delivers cutting-edge technology solutions that drive growth, efficiency, and innovation. From AI-powered applications to IoT ecosystems, we turn your vision into reality.
              </p>
              
              {/* Quote Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border-l-4 border-blue-600 shadow-sm">
                <blockquote className="text-lg italic text-gray-700 font-medium">
                  "The way to get started is to quit talking and begin doing."
                </blockquote>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                View Our Services
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Code className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Web Development</h3>
                  <p className="text-sm text-gray-600">Custom web solutions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Smartphone className="h-8 w-8 text-green-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">Mobile Apps</h3>
                  <p className="text-sm text-gray-600">iOS & Android</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <ShoppingCart className="h-8 w-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">E-commerce</h3>
                  <p className="text-sm text-gray-600">Online stores</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">AI</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">AI Solutions</h3>
                  <p className="text-sm text-gray-600">Smart automation</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold">☁</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Cloud</h3>
                  <p className="text-sm text-gray-600">Scalable infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
