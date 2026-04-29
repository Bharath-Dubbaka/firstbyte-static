import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "The café is my go-to spot for work and snacks. The food is comforting and the vibe is unmatched.",
    name: "Divya M",
    title: "Café Regular",
  },
  {
    quote:
      "I signed up for the tiffin service and I'm so glad I did! Tastes like home.",
    name: "Ankith R",
    title: "Dabba Subscriber",
  },
  {
    quote: "Affordable, hygienic, and always fresh. Highly recommended!",
    name: "Priya M",
    title: "Happy Customer",
  },
  {
    quote:
      "The lunchbox delivery always feels like a warm hug. I can't imagine my workdays without it.",
    name: "Meghana T",
    title: "Corporate Client",
  },
  {
    quote:
      "Café ambiance + great food = perfect combo. Ideal for meetups and remote work.",
    name: "Rohit V",
    title: "Cafe Enthusiast",
  },
  {
    quote:
      "Best curd rice I've had outside my mom's kitchen. Absolutely love this place.",
    name: "Swetha K",
    title: "Food Blogger",
  },
];

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );

      const durationMap = { fast: "20s", normal: "40s", slow: "80s" };
      containerRef.current.style.setProperty(
        "--animation-duration",
        durationMap[speed] || "80s",
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_30%,white_70%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4 ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[320px] md:w-[420px] max-w-full shrink-0 rounded-2xl border border-orange-100 bg-white shadow-xl px-6 py-6 transition-transform duration-300 hover:scale-105"
          >
            <blockquote>
              <span className="relative z-20 text-base leading-relaxed font-medium text-gray-800">
                "{item.quote}"
              </span>
              <div className="relative z-20 mt-4 flex flex-col">
                <span className="text-sm font-semibold text-red-600">
                  {item.name}
                </span>
                <span className="text-xs text-gray-500">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <div className="relative py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-12">
        ❤️ What Our Customers Say
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="px-4"
      />
    </div>
  );
}
