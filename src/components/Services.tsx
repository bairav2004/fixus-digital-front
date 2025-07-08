
import { Code, Smartphone, ShoppingCart, Cloud, BarChart3, Cpu, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web & Mobile App Development",
    description: "Custom web and mobile applications built with modern technologies, responsive design, and optimal performance for your business needs.",
    features: ["React & Node.js", "iOS & Android", "Progressive Web Apps", "API Integration"]
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: "E-commerce Development",
    description: "Complete e-commerce solutions with secure payment gateways, inventory management, and conversion optimization.",
    features: ["Payment Integration", "Inventory Management", "SEO Optimization", "Analytics Dashboard"]
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Custom Software Development",
    description: "Tailored business applications that streamline operations, automate processes, and enhance productivity.",
    features: ["Business Process Automation", "Custom CRM/ERP", "Database Design", "System Integration"]
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration services, and managed cloud platforms for optimal performance.",
    features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Monitoring & Security"]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Business Intelligence Solutions",
    description: "Data analytics, reporting tools, and business intelligence platforms to drive informed decision-making.",
    features: ["Data Analytics", "Custom Dashboards", "Reporting Tools", "Predictive Analytics"]
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Internet of Things (IoT) Solutions",
    description: "Connected device ecosystems, sensor networks, and smart automation systems for modern businesses.",
    features: ["Device Integration", "Real-time Monitoring", "Data Collection", "Smart Automation"]
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI & Machine Learning",
    description: "Intelligent automation, predictive analytics, and machine learning solutions to transform your business processes.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  }
];

export const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we deliver comprehensive technology solutions that drive business growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
