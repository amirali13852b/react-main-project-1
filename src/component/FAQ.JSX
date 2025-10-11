// components/FAQ.js
import React from 'react';

const FAQ = () => {
  const questions = [
    "When Exclusive Private Market for Event ticket sale Opportunities?",
    "If Easy to found subscription And Tickets purchase?",
    "Why Raiso Your more Event & ticket?",
    "What security measures are in place at events?",
    "Can I book tickets for groups?"
  ];

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

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Question Boxes */}
        <div className="max-w-4xl mx-auto">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-[#1B1B1B] rounded-lg border border-[#303030] p-6 mb-6 hover:border-[#C14FE6] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white">{question}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;