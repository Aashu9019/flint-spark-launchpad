
import { Card, CardContent } from "@/components/ui/card";

const TrustSection = () => {
  const awards = [
    { title: "Best Broker of the Year", year: "2024", organization: "Australian Mortgage Awards" },
    { title: "Excellence in Customer Service", year: "2023", organization: "Finance Industry Awards" },
    { title: "Top Performing Broker", year: "2023", organization: "Mortgage Professional Australia" }
  ];

  return (
    <section className="py-16 bg-flint-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-montserrat text-3xl lg:text-4xl font-bold text-flint-maroon mb-4">
            Award-Winning Excellence
          </h2>
          <p className="font-montserrat text-lg text-gray-700">
            Recognized for our commitment to exceptional service and results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <Card 
              key={award.title}
              className="text-center bg-white border-0 hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="font-montserrat font-semibold text-lg text-flint-maroon mb-2">
                  {award.title}
                </h3>
                <p className="font-montserrat text-sm text-gray-600">
                  {award.organization} • {award.year}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
