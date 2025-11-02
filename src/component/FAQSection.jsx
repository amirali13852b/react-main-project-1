import FAQItem from './FAQItem';

const faqsData = [
  { id: 1, question: 'When Exclusive Private Market for Event ticket sale Opportunities?' },
  { id: 2, question: 'If Easy to found subscription And Tickets purchase?' },
  { id: 3, question: 'Why Raiso Your more Event & ticket?' },
  { id: 4, question: 'What security measures are in place at events?' },
  { id: 5, question: 'Can I book tickets for groups?' },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked <span className="text-[#C14FE6]">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-5">
            Explore the most common questions and detailed answers about our events
            at concerts, and security to help guide your journey in the EVENJO.
          </p>
        </div>

      
        <div className="border-t border-gray-700 my-8"></div>

    
        <div className="max-w-4xl mx-auto">
          {faqsData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;