import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Heart,
  Leaf,
  ShieldCheck,
  Clock,
  ChefHat,
  Truck,
  Users,
  Flame,
  Star,
  MapPin,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const storyChapters = [
  {
    year: "2025",
    heading: "It started with a lunchbox.",
    body: "Shiva had been cooking for family and friends for years. During the lockdown, neighbours started asking if she'd send a little extra. One lunchbox became five. Five became twenty. Nobody planned for this — it just happened, the way good things do.",
    side: "left",
  },
  {
    year: "2026",
    heading: "The café was born in Nallagandla.",
    body: "A small space, a few tables, a lot of ambition. The idea was simple: food that tastes like it was made for you, not for a crowd. Comfort food done with care — not reheated, not rushed, not compromised.",
    side: "right",
  },
  {
    // year: "2023",
    heading: "People kept coming back.",
    body: "Not because we marketed hard. Because the dal was honest. Because the masala chai was the right temperature. Because we remembered that you liked it without sugar. That kind of attention to detail is hard to fake — so we never did.",
    side: "left",
  },
  {
    year: "Today",
    heading: "Still cooking. Still delivering.",
    body: "Love at First Byte now serves hundreds of meals every week — from the café in Nallagandla to doorsteps across Hyderabad. The lunchboxes are still going out. The café is busier. And the food still tastes like it was made by someone who actually cares.",
    side: "right",
  },
];

const whyUs = [
  {
    icon: <ChefHat size={20} />,
    stat: "100%",
    label: "Made fresh daily",
    body: "Nothing is prepared the day before. Every dish starts from scratch every morning.",
  },
  {
    icon: <Leaf size={20} />,
    stat: "Pure",
    label: "Vegetarian kitchen",
    body: "No meat, no cross-contamination. A clean kitchen you can trust for your family.",
  },
  {
    icon: <ShieldCheck size={20} />,
    stat: "FSSAI",
    label: "Licensed & certified",
    body: "Certified food safety standards. We take hygiene as seriously as taste.",
  },
  {
    icon: <Clock size={20} />,
    stat: "On time",
    label: "Delivery you can count on",
    body: "We know you're hungry by 1 PM. We plan our day around that, not the other way.",
  },
  {
    icon: <Truck size={20} />,
    stat: "40 km",
    label: "Delivery radius",
    body: "Serving homes and offices across Hyderabad — from Nallagandla to Gachibowli and beyond.",
  },
  {
    icon: <Users size={20} />,
    stat: "500+",
    label: "Happy regulars",
    body: "Not one-time customers — people who order week after week. That's the real metric.",
  },
];

const values = [
  {
    word: "Honest.",
    description:
      "We use real ingredients. No shortcuts, no artificial flavours, no frozen shortcuts dressed up as fresh.",
  },
  {
    word: "Consistent.",
    description:
      "The paneer butter masala you loved on Tuesday should taste exactly as good on Friday. We hold ourselves to that.",
  },
  {
    word: "Personal.",
    description:
      "We remember preferences. We adjust spice levels. We treat every customer like a regular, even on their first order.",
  },
];

// ─── Parallax hero text ───────────────────────────────────────────────────────

function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0b]"
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Giant background text */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span
          className="text-[18vw] font-elegant font-bold text-white/[0.03] select-none leading-none text-center"
          aria-hidden
        >
          LAFB
        </span>
      </motion.div>

      {/* Accent lines */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-32 w-px bg-gradient-to-b from-transparent via-amber-700/60 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-32 w-px bg-gradient-to-b from-transparent via-amber-700/60 to-transparent hidden lg:block" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.25em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-amber-600 text-xs font-bold uppercase tracking-[0.3em] mb-8"
        >
          Nallagandla, Hyderabad · Est.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-6xl md:text-8xl font-elegant font-bold text-white leading-[1.0] mb-8"
        >
          Food made <em className="text-amber-400 not-italic">for people,</em>
          <br />
          not for scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          A small café and tiffin service in Hyderabad, built on the belief that
          everyday food deserves the same care as a special occasion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-10 text-stone-600 text-sm"
        >
          <MapPin size={14} className="text-amber-700" />
          HUDA Layout, Nallagandla · Open Mon–Sun, 8 AM – 10 PM
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-stone-600 text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-stone-600 to-transparent"
        />
      </motion.div>
    </div>
  );
}

// ─── Pull quote ───────────────────────────────────────────────────────────────

function PullQuote({ text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border-l-4 border-amber-500 pl-8 py-2 my-12"
    >
      <p className="text-3xl md:text-4xl font-elegant font-bold text-stone-800 italic leading-snug">
        "{text}"
      </p>
    </motion.div>
  );
}

// ─── Story chapter ────────────────────────────────────────────────────────────

function Chapter({ chapter, index }) {
  const isLeft = chapter.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.05 }}
      className={`flex flex-col ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-start mb-20`}
    >
      {/* Year pillar */}
      <div
        className={`flex-shrink-0 ${isLeft ? "lg:text-right" : "lg:text-left"} lg:w-28`}
      >
        <span className="text-6xl font-elegant font-bold text-stone-200 leading-none">
          {chapter.year}
        </span>
      </div>

      {/* Divider dot */}
      <div className="hidden lg:flex flex-col items-center gap-0 pt-2">
        <div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-100 shrink-0" />
        <div className="w-px flex-1 min-h-[80px] bg-stone-200 mt-2" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-3xl font-elegant font-bold text-stone-800 mb-4 leading-tight">
          {chapter.heading}
        </h3>
        <p className="text-stone-500 text-base md:text-lg leading-relaxed">
          {chapter.body}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Why card ─────────────────────────────────────────────────────────────────

function WhyCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group relative p-7 rounded-2xl bg-white border border-stone-100 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      {/* Hover fill */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:bg-amber-200 transition-colors">
            {item.icon}
          </div>
          <span className="text-3xl font-elegant font-black text-stone-800 leading-none">
            {item.stat}
          </span>
        </div>
        <h4 className="font-bold text-stone-800 text-base mb-2">
          {item.label}
        </h4>
        <p className="text-stone-500 text-sm leading-relaxed">{item.body}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="bg-[#f9f6f1]">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <ParallaxHero />

      {/* ── Opening statement ──────────────────────────────────────── */}
      <div className="bg-[#f9f6f1] py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-amber-700 text-xs font-bold uppercase tracking-[0.3em] mb-6"
          >
            Our Story
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-elegant text-stone-700 leading-relaxed mb-6"
          >
            Love at First Byte wasn't planned. It grew out of a simple, stubborn
            belief — that food cooked with real attention tastes different. Not
            just better.
            <em className="text-stone-900 not-italic font-bold"> Different.</em>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-lg leading-relaxed"
          >
            You can taste when something was made in a hurry. You can taste when
            someone cut corners on the masala. You can definitely taste when the
            dal sat in a bain-marie for four hours. We built this place so you'd
            never have to taste any of that.
          </motion.p>
        </div>
      </div>

      {/* ── Story chapters ─────────────────────────────────────────── */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16"
          >
            <div className="h-px flex-1 bg-stone-200" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 shrink-0">
              How it happened
            </span>
            <div className="h-px flex-1 bg-stone-200" />
          </motion.div>

          {storyChapters.map((chapter, i) => (
            <Chapter key={i} chapter={chapter} index={i} />
          ))}
        </div>
      </div>

      {/* ── Pull quote ─────────────────────────────────────────────── */}
      <div className="bg-[#f9f6f1] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <PullQuote text="The best meals don't announce themselves. They just make you feel at home." />
          <p className="text-stone-400 text-sm mt-4 pl-8">
            — The philosophy we cook by
          </p>
        </div>
      </div>

      {/* ── What we stand for ──────────────────────────────────────── */}
      <div className="bg-[#0d0d0b] py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-amber-700 text-xs font-bold uppercase tracking-[0.3em] mb-4">
              What we stand for
            </p>
            <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white leading-tight">
              Three words.
              <br />
              <span className="text-stone-400">Non-negotiable.</span>
            </h2>
          </motion.div>

          <div className="space-y-px">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-stone-800 hover:border-amber-800/60 transition-colors duration-300"
              >
                <span className="text-3xl md:text-4xl font-elegant font-black text-white md:w-40 shrink-0 group-hover:text-amber-400 transition-colors duration-300">
                  {v.word}
                </span>
                <p className="text-stone-400 text-base md:text-lg leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Why choose us ──────────────────────────────────────────── */}
      <div className="bg-[#f9f6f1] py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-amber-700 text-xs font-bold uppercase tracking-[0.3em] mb-3"
              >
                Why choose us
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-elegant font-bold text-stone-800 leading-tight"
              >
                The things that
                <br />
                actually matter.
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-stone-500 text-base max-w-xs leading-relaxed md:text-right"
            >
              Not features. Not buzzwords. Just the real reasons people keep
              coming back.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((item, i) => (
              <WhyCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Team / human touch ─────────────────────────────────────── */}
      <div className="bg-white py-20 px-4 border-t border-stone-100">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center"
          ></motion.div>
        </div>
      </div>

      {/* ── Closing stat bar ───────────────────────────────────────── */}
      <div className="bg-amber-600 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Regular customers" },
              { number: "40 km", label: "Delivery reach" },
              { number: "7 days", label: "Open every week" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <p className="text-4xl md:text-5xl font-elegant font-black text-white leading-none mb-2">
                  {stat.number}
                </p>
                <p className="text-amber-200 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
