
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContentPreview = () => {
  const articles = [
    {
      title: "First Home Buyer's Guide 2024",
      excerpt: "Everything you need to know about purchasing your first property in Australia.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop",
      category: "Guide"
    },
    {
      title: "Investment Property Strategies",
      excerpt: "Maximize your property investment returns with expert insights and tips.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      category: "Investment"
    },
    {
      title: "Interest Rate Outlook",
      excerpt: "What the latest RBA decisions mean for your mortgage and refinancing options.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Market Update"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-flint-maroon mb-6">
            Latest Insights
          </h2>
          <p className="font-montserrat text-xl text-gray-700">
            Stay informed with our expert analysis and property market updates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card 
              key={article.title}
              className="border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-flint-coral text-white px-2 py-1 rounded text-sm font-montserrat font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                  {article.title}
                </h3>
                <p className="font-montserrat text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  className="border-flint-coral text-flint-coral hover:bg-flint-coral hover:text-white font-montserrat"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;
