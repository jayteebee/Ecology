"use client"
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  // {
  //   question: 'Are there any discounts available?',
  //   answer: 'Yes, all Ecologists are entitled to a discount.',
  // },
  {
    question: 'What time period counts as a "Day" for hire?',
    answer: 'One day means 9am the day before till 5pm following day.',
  },
  {
    question: 'How can I get my kit?',
    answer: 'You can pick it up from the office in Bristol (Map Below) or delivery is also available.',
  },
  {
    question: 'Will you provide me with any training?',
    answer: 'Yes, free training will be provided over call or at our office.',
  },
  {
    question: "Can you give me a hand when I'm doing my survey?",
    answer: "We'd be happy to! Onsite attendance can be arranged if you're local (charges may apply).",
  },
  {
    question: "I want to buy one, how does it work?",
    answer: "We have a range of hire and purchase options available. Contact us for more information.",
  },

];

const FAQs: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
        <h1 className="h2 text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
        FAQ'S
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-medium">{item.question}</h2>
            <button className="text-lg">{expandedIndex === index ? '-' : '+'}</button>
          </div>
          {expandedIndex === index && (
            <div className="mt-2 text-black-600">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
