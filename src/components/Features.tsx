
import { Zap, Shield, Rocket, Users, BarChart3, Puzzle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy and scale your applications in seconds, not hours. Our optimized infrastructure ensures peak performance."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance standards protect your data. SOC 2 Type II certified."
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "From idea to production in minutes. Our streamlined workflow eliminates bottlenecks."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built for teams. Real-time collaboration tools that keep everyone in sync."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights into your business metrics. Make data-driven decisions with confidence."
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description: "Connect with 500+ tools and services. Build your perfect workflow."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Flint?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to accelerate your business growth and streamline your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
