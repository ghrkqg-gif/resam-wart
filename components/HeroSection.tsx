"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* 배경 장식 원 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-100 rounded-full opacity-20 blur-3xl" />

      {/* 상단 네비게이션 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">리샘</span>
            </div>
            <span className="font-bold text-gray-800">리샘한의원</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-purple-600 transition-colors">편평사마귀</a>
            <a href="#types" className="hover:text-purple-600 transition-colors">증상유형</a>
            <a href="#compare" className="hover:text-purple-600 transition-colors">비교</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-purple-600 transition-colors">상담신청</a>
          </div>
          <a
            href="tel:031-713-2784"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            031-713-2784
          </a>
        </div>
      </nav>

      {/* 히어로 콘텐츠 */}
      <div className="max-w-5xl mx-auto px-4 text-center pt-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-purple-200">
            ✨ 편평사마귀 · 쥐젖 전문 한의원
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          깨끗하고{" "}
          <span className="gradient-text">생기넘치는 피부</span>
          <br />
          되찾으세요
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          편평사마귀, 쥐젖, 물사마귀 걱정 마세요.<br />
          리샘한의원의 <strong>체계적인 한방 치료</strong>로 자신감 있는 피부를 되찾으실 수 있습니다.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-purple-200"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#about"
            className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all"
          >
            증상 확인하기
          </a>
        </motion.div>

        {/* 통계 배지 */}
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { num: "10년+", label: "피부 한방 전문" },
            { num: "5,000+", label: "치료 경험" },
            { num: "98%", label: "환자 만족도" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-sm border border-white/50">
              <div className="text-2xl font-extrabold gradient-text">{stat.num}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
