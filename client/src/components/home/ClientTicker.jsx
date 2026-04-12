const ClientTicker = () => {
  const clients = [
    {
      name: "Fortune 500",
      logo: "https://via.placeholder.com/150x50?text=Client+1",
    },
    {
      name: "Global Tech",
      logo: "https://via.placeholder.com/150x50?text=Client+2",
    },
    {
      name: "Innovate Corp",
      logo: "https://via.placeholder.com/150x50?text=Client+3",
    },
    {
      name: "Data Systems",
      logo: "https://via.placeholder.com/150x50?text=Client+4",
    },
    {
      name: "Future Finance",
      logo: "https://via.placeholder.com/150x50?text=Client+5",
    },
    {
      name: "Health Plus",
      logo: "https://via.placeholder.com/150x50?text=Client+6",
    },
  ];

  return (
    <div className="py-12 bg-white border-b border-secondary-100 overflow-hidden">
      <div className="container-custom mb-8 text-center">
        <p className="text-sm font-semibold text-secondary-500 uppercase tracking-widest">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`ticker-a-${client.name}-${index}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-lg sm:text-2xl font-display font-bold text-secondary-400 hover:text-brand-purple transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={`ticker-b-${client.name}-${index}`}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <span className="text-lg sm:text-2xl font-display font-bold text-secondary-400 hover:text-brand-purple transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientTicker;
