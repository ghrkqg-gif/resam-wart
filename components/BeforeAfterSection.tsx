"use client";

import { motion } from "framer-motion";

const cases = [
  {
    type: "편평사마귀 (얼굴 다발성)",
    period: "치료 8주 후",
    before: { color: "#f3d0d0", label: "치료 전", desc: "이마·볼에 20개 이상의 납작한 구진, 가려움 동반" },
    after: { color: "#d0f3d5", label: "치료 후", desc: "전체 병변 소실, 피부 결 개선, 재발 없음" },
  },
  {
    type: "쥐젖 (목·겨드랑이)",
    period: "당일 제거",
    before: { color: "#f3e8d0", label: "제거 전", desc: "목과 겨드랑이 30여 개 돌출 병변, 옷에 걸려 통증" },
    after: { color: "#d0f3d5", label: "제거 후", desc: "깔끔하게 제거, 흉터 없이 회복" },
  },
  {
    type: "물사마귀 (소아 몸통)",
    period: "치료 6주 후",
    before: { color: "#d0e8f3", label: "치료 전", desc: "몸통 전체 50여 개의 진주빛 구진 분포" },
    after: { color: "#d0f3d5", label: "치료 후", desc: "면역 강화 후 전체 소실, 재발 없음" },
  },
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            치료 전후
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            리샘한의원의 <span className="gradient-text">치료 결과</span>를 확인하세요
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            실제 환자분들의 치료 경과입니다. 개인 차이가 있을 수 있으나 체계적인 치료로 결과를 만들어냅니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.type}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* 헤더 */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 border-b border-gray-100">
                <div className="text-sm font-bold text-gray-700">{c.type}</div>
                <div className="text-xs text-purple-600 font-semibold">{c.period}</div>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2">
                {[c.before, c.after].map((side) => (
                  <div key={side.label} className="p-4 border-r border-gray-100 last:border-r-0">
                    {/* 이미지 placeholder */}
                    <div
                      className="w-full aspect-square rounded-xl mb-3 flex items-center justify-center text-lg font-bold"
                      style={{ backgroundColor: side.color }}
                    >
                      {side.label === "치료 전" ? "😟" : "😊"}
                    </div>
                    <div className={`text-xs font-bold mb-1 ${side.label.includes("후") ? "text-green-600" : "text-red-500"}`}>
                      {side.label}
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{side.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 안내문 */}
        <motion.p
          className="text-center text-xs text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          * 위 전후 사진은 실제 치료 사례를 기반으로 한 예시입니다.
          치료 효과는 개인의 면역 상태, 증상 정도에 따라 다를 수 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
