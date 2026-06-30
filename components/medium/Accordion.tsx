"use client";

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const faqs = [
  {
    question: "What services do you offer in your home cleaning package?",
    answer:
      "We provide deep cleaning, regular maintenance, move-in/move-out cleaning, dusting, vacuuming, sanitizing, and optional add-ons like carpet and upholstery cleaning.",
  },
  {
    question: "Are your cleaning products safe for pets and children?",
    answer:
      "Yes! We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and allergy-sensitive individuals while remaining effective.",
  },
  {
    question: "How do I schedule a cleaning service?",
    answer:
      "Book online, call, or message us to schedule your preferred date, time, and service type with flexible recurring options.",
  },
  {
    question: "What if I need to reschedule or cancel my appointment?",
    answer:
      "Notify us 24 hours before to reschedule or cancel without fees; last-minute cancellations may incur a small charge.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-7">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div key={index} className="overflow-hidden border-b border-gray-400">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex w-full items-center justify-between px-6 py-6 text-left rounded-full "
            >
              <h3 className="pr-4 title-text">{faq.question}</h3>

              {isOpen ? (
                <IoMdClose className="h-5 w-5 shrink-0 text-slate-500" />
              ) : (
                <FaPlus className="h-5 w-5 shrink-0 text-slate-500" />
              )}
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 leading-8 ">
                  <p> {faq.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
