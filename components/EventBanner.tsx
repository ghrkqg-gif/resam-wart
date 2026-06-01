"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function EventBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      if (diff <= 0) { clearInterval(interval); return; }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 py-10 relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-1 rounded-full mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            🎉 LIMITED EVENT
          </motion.span>

          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            편평사마귀 + 쥐젖 <span className="text-yellow-300">초특가 이벤트</span> 진행 중!
          </h2>
          <p className="text-purple-100 mb-6 text-lg">
            지금 상담 신청 시 <strong className="text-white">최대 40% 할인</strong> · 첫 방문 진찰료 무료
          </p>

          {/* 카운트다운 */}
          <div className="flex justify-center gap-3 mb-6">
            {[
              { label: "일", value: timeLeft.days },
              { label: "시간", value: timeLeft.hours },
              { label: "분", value: timeLeft.minutes },
              { label: "초", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[70px] text-center">
                <div className="text-3xl font-extrabold text-white tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-purple-200 text-xs mt-1">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              이벤트 상담 신청 →
            </a>
            <a
              href="tel:031-713-2784"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              📞 031-713-2784
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
