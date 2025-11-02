const BigPicturesSection = () => {
  return (
    <section className="flex justify-center space-x-3 mt-32">
      <div className="flex flex-col space-y-4">
        <img
          src="/img/bigs/refundble.svg"
          alt="Refundable"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
        <img
          src="/img/bigs/smart deals.svg"
          alt="Smart Deals"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
      </div>
      <div>
        <img
          src="/img/bigs/book anytime.svg"
          alt="Book Anytime"
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 rounded-lg cursor-pointer"
        />
      </div>
    </section>
  );
};

export default BigPicturesSection;