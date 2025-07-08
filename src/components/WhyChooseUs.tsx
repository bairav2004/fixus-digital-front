
import { Shield, Zap, Users, Headphones, Code, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Proven Track Record",
    description: "Over 50 successful projects delivered on time and within budget, with 100% client satisfaction rate."
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Cutting-Edge Technology",
    description: "We use the latest technologies and frameworks to ensure your solution is future-proof and scalable."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Expert Team",
    description: "Our team consists of certified professionals with deep expertise in their respective domains."
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance to ensure your systems run smoothly."
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Custom Solutions",
    description: "Tailored solutions that fit your specific business needs and requirements perfectly."
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Business Growth Focus",
    description: "Every solution is designed to drive measurable business growth and ROI."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose FIXUS?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that truly make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Our Development Process
            </h3>
            <p className="text-gray-600">
              A proven methodology that ensures project success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
              <p className="text-sm text-gray-600">Understanding your needs and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Planning</h4>
              <p className="text-sm text-gray-600">Creating detailed project roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
              <p className="text-sm text-gray-600">Building with agile methodology</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Launch</h4>
              <p className="text-sm text-gray-600">Deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
