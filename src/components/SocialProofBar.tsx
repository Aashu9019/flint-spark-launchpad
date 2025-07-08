
const SocialProofBar = () => {
  const banks = [
    { name: "Commonwealth Bank", logo: "CBA" },
    { name: "ANZ", logo: "ANZ" },
    { name: "NAB", logo: "NAB" },
    { name: "Westpac", logo: "WBC" },
    { name: "Macquarie", logo: "MQG" },
    { name: "ING", logo: "ING" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 font-montserrat mb-8 text-lg">
          Trusted by Australia's leading financial institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {banks.map((bank, index) => (
            <div 
              key={bank.name}
              className="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {bank.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
