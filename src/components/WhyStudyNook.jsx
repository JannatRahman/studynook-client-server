'use client';

import { BookOpen, Wifi, Shield, Coffee, Users, Clock } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Distraction-Free Study",
    desc: "A calm and quiet environment designed to boost your focus and productivity.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    desc: "Fast and reliable internet access for research, classes, and online learning.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    desc: "24/7 CCTV monitoring and secure access for complete peace of mind.",
  },
  {
    icon: Users,
    title: "Private & Group Spaces",
    desc: "Dedicated zones for solo study, group discussions, and collaboration.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    desc: "Study anytime with hourly, daily, and monthly flexible plans.",
  },
  {
    icon: Coffee,
    title: "Comfort Facilities",
    desc: "Comfortable seating, AC, and refreshment areas for long study sessions.",
  },
];

export default function WhyStudyNook() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#C7EABB] to-[#E8F5BD]">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800 animate__animated animate__slideInLeft">
                Why Study <span className="text-[#84B179]">Nook</span>
              </h2>
        <p className="text-gray-600 mt-3 animate__animated animate__bounce">
          A better space for better focus and better results.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate__animated animate__slideInRight">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
              <item.icon className="text-green-600 w-6 h-6" />
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}