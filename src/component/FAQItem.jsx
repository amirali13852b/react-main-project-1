const FAQItem = ({ question }) => {
  return (
    <div className="bg-[#1B1B1B] rounded-lg border border-[#303030] p-6 mb-6 hover:border-[#C14FE6] transition-all duration-300 cursor-pointer">
      <h3 className="text-xl font-semibold text-white">
        {question}
      </h3>
    </div>
  );
};

export default FAQItem;