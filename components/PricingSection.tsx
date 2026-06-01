"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "초진 상담",
    tag: "첫 방문",
    price: "무료",
    originalPrice: null,
    color: "from-purple-500 to-violet-600",
    features: [
      "증상 감별 진단",
      "치료 방향 설명",
      "치료 기간 안내",
      "이벤트 가격 적용",
    ],
    cta: "무료 상담 신청",
    highlight: false,
  },
  {
    name: "편평사마귀 치료",
    tag: "인기",
    price: "회당 5~8만원",
    originalPrice: "10~15만원",
    color: "from-pink-500 to-rose-600",
    features: [
      "면역 강화 한약 처방",
      "한방 외치법 시술",
      "경과 모니터링",
      "재발 방지 관리",
      "이벤트 시 최대 40% 할인",
    ],
    cta: "이벤트 신청하기",
    highlight: true,
  },
  {
    name: "쥐젖 제거",
    tag: "당일 완료",
    price: "개당 1~3만원",
    originalPrice: null,
    color: "from-violet-500 to-purple-600",
    features: [
      "안전한 전문 제거",
      "흉터 최소화 처치",
      "처치 후 관리 안내",
      "5개 이상 묶음 할인",
    ],
    cta: "상담 예약하기",
    highlight: false,
  },
];

const notes = [
  "치료 비용은 증상 범위·중증도에 따라 달라질 수 있습니다.",
  "건강보험 적용 여부는 진료 후 안내드립니다.",
  "이벤트 가격은 기간 종료 시 변경될 수 있습니다.",
  "정확한 비용은 초진 상담 후 확정됩니다 (초진 무료).",
];

export default function PricingSection() {
  return (
    <section className="py-20 section-alt">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            치료 비용
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            합리적인 비용으로<br />
            <span className="gradient-text">전문 치료</span>를 받으세요
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            초진 상담은 무료입니다. 부담 없이 방문하셔서 정확한 진단을 받아보세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`rounded-3xl overflow-hidden ${plan.highlight ? "ring-2 ring-pink-400 shadow-2xl shadow-pink-100 scale-105" : "shadow-lg"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-r ${plan.color} px-6 py-5`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-xs font-semibold bg-white/20 px-2 py-0.5 rounded-full">
                    {plan.tag}
                  </span>
                  {plan.highlight && (
                    <span className="text-yellow-300 text-xs font-bold">⭐ 추천</span>
                  )}
                </div>
                <h3 className="text-white font-extrabold text-xl">{plan.name}</h3>
                <div className="mt-3">
                  {plan.originalPrice && (
                    <div className="text-white/60 line-through text-sm">{plan.originalPrice}</div>
                  )}
                  <div className="text-white text-2xl font-extrabold">{plan.price}</div>
                </div>
              </div>

              <div className="bg-white px-6 py-5">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full text-sm font-bold transition-all ${
                    plan.highlight
                      ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-90"
                      : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 주의사항 */}
        <motion.div
          className="bg-white rounded-2xl p-6 border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="font-bold text-gray-700 mb-3 text-sm">📋 비용 안내 참고사항</h4>
          <ul className="space-y-1">
            {notes.map((note) => (
              <li key={note} className="text-xs text-gray-500 flex items-start gap-2">
                <span className="mt-0.5 text-gray-400">•</span>
                {note}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
