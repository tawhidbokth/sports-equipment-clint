import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the return policy?',
      answer:
        'You can return any product within 30 days of purchase as long as it is in its original condition.',
    },
    {
      question: 'Do you offer international shipping?',
      answer:
        'Yes, we offer worldwide shipping. Shipping fees may vary depending on the destination.',
    },
    {
      question: 'How can I track my order?',
      answer:
        'Once your order is shipped, you will receive a tracking number via email or SMS.',
    },
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="my-10 w-11/12 mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="bg-gray-800 text-white shadow-md rounded-lg p-5">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
