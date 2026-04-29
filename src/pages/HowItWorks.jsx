import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UtensilsCrossed,
  MessageCircle,
  ChefHat,
  Truck,
  Users,
  ArrowRight,
  Phone,
  Star,
  Leaf,
  Clock,
  ShieldCheck,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "Pick your plan",
    subtitle: "Trial · Weekly · Monthly",
    body: "Start with a single trial meal, or jump straight into a weekly or monthly subscription. No lock-ins — you can pause, change, or cancel anytime over WhatsApp. Takes 30 seconds.",
    icon: <UtensilsCrossed size={28} />,
    bg: "#fff8ed",
    accent: "#d97706",
    iconBg: "#fef3c7",
    tag: "Takes 30 seconds",
  },
  {
    number: "02",
    title: "Tell us where you are",
    subtitle: "Hyderabad · within 40 km",
    body: "Drop us your address on WhatsApp. We deliver across Nallagandla, Gachibowli, Tellapur, Kondapur and nearby. If you're within 40 km, we've got you.",
    icon: <Phone size={28} />,
    bg: "#f0fdf4",
    accent: "#16a34a",
    iconBg: "#dcfce7",
    tag: "One message away",
  },
  {
    number: "03",
    title: "We cook. Fresh. Every day.",
    subtitle: "No frozen. No reheated.",
    body: "Your dabba is prepared every morning from scratch. Dal, sabzi, chapati or rice, raita — all cooked the same day it reaches you. You'll taste the difference immediately.",
    icon: <ChefHat size={28} />,
    bg: "#fef2f2",
    accent: "#dc2626",
    iconBg: "#fee2e2",
    tag: "Ready by noon",
  },
  {
    number: "04",
    title: "Delivered to your door",
    subtitle: "On time, every time",
    body: "Lunch is delivered hot. We track our routes so you're never left waiting. If there's ever a delay, we call you first — because your time matters as much as your food.",
    icon: <Truck size={28} />,
    bg: "#eff6ff",
    accent: "#2563eb",
    iconBg: "#dbeafe",
    tag: "Hot & on time",
  },
];

const perks = [
  { icon: <Leaf size={18} />, text: "veg and non-veg" },
  { icon: <Star size={18} />, text: "FSSAI certified kitchen" },
  { icon: <Clock size={18} />, text: "Rotating weekly menu" },
  { icon: <Users size={18} />, text: "500+ happy subscribers" },
];

const faqs = [
  {
    q: "Can I pause my subscription?",
    a: "Yes — just message us on WhatsApp a day before. Weekly subscribers can pause weekends, monthly subscribers can pause up to 4 days.",
  },
  {
    q: "Do you deliver on weekends?",
    a: "Weekend delivery is available for monthly subscribers. Weekly plans run Monday to Friday by default — but ask us, we'll work something out.",
  },
  {
    q: "What if I don't like a particular dish?",
    a: "Tell us your preferences when you sign up. We note down what you avoid — certain vegetables, spice levels, anything — and cook accordingly.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Not really. The trial is a single meal. Even weekly plans are just one week at a time. We earn your trust meal by meal.",
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

// ─── Components ───────────────────────────────────────────────────────────────

function StepCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Connector arrow — desktop */}
      {index < steps.length - 1 && (
        <div className="hidden lg:flex absolute top-12 -right-6 z-10 items-center">
          <ArrowRight size={20} className="text-stone-300" />
        </div>
      )}

      <div
        className="rounded-3xl p-8 h-full border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        style={{ backgroundColor: step.bg }}
      >
        {/* Number + icon row */}
        <div className="flex items-start justify-between mb-6">
          <span
            className="text-7xl font-elegant font-black leading-none select-none"
            style={{ color: step.accent + "22" }}
          >
            {step.number}
          </span>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: step.iconBg, color: step.accent }}
          >
            {step.icon}
          </div>
        </div>

        {/* Tag */}
        <span
          className="inline-block text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4"
          style={{ backgroundColor: step.accent + "18", color: step.accent }}
        >
          {step.tag}
        </span>

        <h3 className="text-2xl font-elegant font-bold text-stone-800 mb-1">
          {step.title}
        </h3>
        <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-4">
          {step.subtitle}
        </p>
        <p className="text-stone-600 text-sm leading-relaxed">{step.body}</p>
      </div>
    </motion.div>
  );
}

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

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border-b border-stone-200 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="text-stone-800 font-elegant font-bold text-lg group-hover:text-amber-700 transition-colors">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full border-2 border-stone-300 flex items-center justify-center text-stone-400 transition-all duration-300 ${
            open ? "rotate-45 border-amber-500 text-amber-500 bg-amber-50" : ""
          }`}
        >
          <span className="text-lg leading-none font-light">+</span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-stone-500 leading-relaxed text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <div className="bg-[#faf7f2] min-h-screen">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Rich gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-rose-700" />

        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-black/10 pointer-events-none" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 pt-36 pb-28 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white/90 text-xs font-bold uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-8 backdrop-blur-sm"
          >
            <Leaf size={11} /> Fresh Tiffin · Hyderabad
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-elegant font-bold text-white leading-[1.05] mb-6"
          >
            Eat well, <br className="hidden md:block" />
            without the effort.
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-orange-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Fresh home-cooked vegetarian meals, delivered to your door every
            day. Here's exactly how it works — from your first message to your
            first bite.
          </motion.p> */}

          {/* Perks row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {perks.map((p, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full"
              >
                {p.icon}
                {p.text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="relative h-16 overflow-hidden">
          <svg
            viewBox="0 0 1440 64"
            className="absolute bottom-0 w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z"
              fill="#faf7f2"
            />
          </svg>
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

      {/* ── Steps ──────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-700 text-xs font-bold uppercase tracking-[0.3em] mb-3"
          >
            The process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-elegant font-bold text-stone-800"
          >
            Four steps.{" "}
            <span className="text-stone-400 italic font-normal">
              That's it.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>
      </div>

      {/* ── Visual break — full bleed quote ────────────────────────── */}
      {/* <div className="relative bg-stone-900 py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #f97316 0%, transparent 50%),
                              radial-gradient(circle at 80% 50%, #dc2626 0%, transparent 50%)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p
            className="text-6xl text-orange-700/40 font-elegant leading-none mb-2"
            aria-hidden
          >
            "
          </p>
          <p className="text-2xl md:text-3xl font-elegant font-bold text-white leading-snug mb-6">
            You shouldn't have to think about lunch. That's our job. Yours is to
            eat it and get back to your day.
          </p>
          <p className="text-stone-500 text-sm uppercase tracking-widest font-semibold">
            — Love at First Byte
          </p>
        </motion.div>
      </div> */}

      {/* ── Who it's for ───────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-elegant font-bold text-stone-800 mb-3"
          >
            Who is this for?
          </motion.h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            If you're any of these, the dabba service was made for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              emoji: "🎓",
              who: "Students",
              pain: "Tired of hostel food and Swiggy bills eating your budget",
              fix: "Wholesome homestyle meals at a fraction of the cost. Every day.",
              color: "from-violet-50 to-purple-50",
              border: "border-violet-200",
              accent: "#7c3aed",
            },
            {
              emoji: "💼",
              who: "Working Professionals",
              pain: "No time to cook, no energy to decide where to order from",
              fix: "Set it once, forget it. Lunch just shows up — fresh, on time.",
              color: "from-amber-50 to-orange-50",
              border: "border-amber-200",
              accent: "#d97706",
            },
            {
              emoji: "👨‍👩‍👧",
              who: "Families",
              pain: "Need reliable, hygienic home food when mum's not around",
              fix: "Pure veg, FSSAI certified, tastes like it was made at home. Because it was.",
              color: "from-emerald-50 to-green-50",
              border: "border-emerald-200",
              accent: "#059669",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl border-2 ${card.border} bg-gradient-to-b ${card.color} p-7`}
            >
              <div className="text-4xl mb-4">{card.emoji}</div>
              <h3
                className="text-xl font-elegant font-bold mb-3"
                style={{ color: card.accent }}
              >
                {card.who}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4 pb-4 border-b border-black/8">
                <span className="font-semibold text-stone-600">
                  The problem:{" "}
                </span>
                {card.pain}
              </p>
              <p className="text-stone-700 text-sm leading-relaxed font-medium">
                {card.fix}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      {/* <div className="bg-white py-20 px-4 border-t border-stone-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-elegant font-bold text-stone-800"
            >
              Questions people ask
            </motion.h2>
          </div>

          <div>
            {faqs.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div> */}

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-rose-600 py-24 px-4">
        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center"
        >
          <div className="text-5xl mb-6">🍱</div>
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-white mb-4 leading-tight">
            Ready to start eating better?
          </h2>
          <p className="text-orange-100 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Message us, Tell us your area and which plan sounds good. We'll take
            it from there — no forms, no apps, no fuss.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/916264588151?text=Hi! I'd like to know more about the dabba subscription."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white text-red-600 font-black px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-200 text-base"
            >
              <MessageCircle size={20} />
              Start on WhatsApp
            </a>
            <a
              href="/bookus"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200 text-base"
            >
              Try a trial meal first
              <ArrowRight size={18} />
            </a>
          </div> */}

          <p className="text-orange-200/70 text-xs mt-8 tracking-wide">
            +91 62645 88151 · Delivering across Hyderabad · 40 km radius
          </p>
        </motion.div>
      </div>
    </div>
  );
}
