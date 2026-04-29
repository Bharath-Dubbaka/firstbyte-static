import { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-red-500" />,
      label: "Address",
      value: "HUDA Layout, Nallagandla, Hyderabad, Telangana - 500019",
    },
    {
      icon: <Phone className="w-6 h-6 text-red-500" />,
      label: "Phone",
      value: "+91 62645 88151",
      link: "tel:+916264588151",
    },
    {
      icon: <Mail className="w-6 h-6 text-red-500" />,
      label: "Email",
      value: "loveatfirstbyte.437@gmail.com",
      link: "mailto:loveatfirstbyte.437@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      label: "Hours",
      value: "Monday – Sunday: 8:00 AM – 10:00 PM",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 to-black pb-20 pt-32 md:pt-36 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#d4af37]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a question, want to place a bulk order, or just want to say hi?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 shrink-0">{info.icon}</div>
                <div>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wide mb-1">
                    {info.label}
                  </p>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-white hover:text-[#d4af37] transition-colors duration-200 font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            {/* <a
              href="https://wa.me/916264588151"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 mt-4"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a> */}

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-700 mt-6">
              <iframe
                title="Love At First Byte Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2!2d78.3!3d17.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzAwLjAiTiA3OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-400/30 rounded-2xl p-10 text-center"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for reaching out. We'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="Priya Sharma"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="priya@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-[#d4af37] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-500 outline-none focus:border-[#d4af37] transition-colors resize-none"
                    placeholder="Tell us about your catering needs, questions, or feedback..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#d4af37] hover:bg-[#cfa12f] text-black font-bold py-4 rounded-full transition-colors duration-200 tracking-wide"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
