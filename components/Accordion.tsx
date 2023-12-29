"use client";
import { useState, ReactNode, FC, useEffect } from "react";
import "../components/styles/accordion.css";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
};

const Accordion: FC<AccordionProps> = ({
  title,
  isOpen,
  onToggle,
  children,
}) => {
  return (
    <div className="my-2 px-3">
      <button
        className="flex w-full flex-row items-center justify-center border-b-2 border-highlight px-4 py-2 text-center text-2xl font-bold text-highlight"
        onClick={onToggle}
      >
        {title}
        <ChevronDown
          className={`${isOpen ? "rotate-chevron" : "initial-chevron"} ml-5`}
          height={30}
          width={30}
        ></ChevronDown>
      </button>
      <div
        className={`${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-wrapper grid`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
