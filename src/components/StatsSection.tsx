
const StatsSection = () => {
  const stats = [
    { value: "$4B+", label: "Loans Settled", icon: "💰" },
    { value: "5000+", label: "Happy Clients", icon: "😊" },
    { value: "$120M+", label: "Interest Saved", icon: "📈" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-flint-maroon to-flint-maroon/90">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center text-white animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {stat.icon}
              </div>
              <div className="font-montserrat text-4xl lg:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="font-montserrat text-lg text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
