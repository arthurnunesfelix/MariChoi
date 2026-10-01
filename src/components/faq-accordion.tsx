"use client";

import { useState, type CSSProperties } from "react";
import { Plus } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            data-reveal
            style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            className="border-t border-sand last:border-b"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              className="group flex w-full items-center gap-5 py-6 text-left md:gap-7"
            >
              <span className="font-display text-sm italic text-gold">
                0{index + 1}
              </span>
              <span
                className={`flex-1 font-display text-xl leading-snug transition-colors duration-300 md:text-2xl ${
                  open ? "text-espresso" : "text-espresso/80 group-hover:text-espresso"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 md:size-11 ${
                  open
                    ? "rotate-45 border-espresso bg-espresso text-cream"
                    : "border-sand text-espresso group-hover:border-gold group-hover:text-gold"
                }`}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-xl pb-7 pl-9 leading-relaxed text-mocha md:pl-11">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
