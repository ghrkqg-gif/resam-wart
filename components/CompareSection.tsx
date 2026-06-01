"use client";

import { motion } from "framer-motion";

const rows = [
  { category: "원인", flat: "HPV 바이러스 (3, 10형)", skin: "바이러스 무관\n(마찰·호르몬·노화)", water: "MCV 폭스바이러스" },
  { category: "외관", flat: "납작한 살색~연갈색 구진", skin: "피부가 늘어진 연한 돌기", water: "반투명 진주빛, 중앙 함몰" },
  { category: "주요 부위", flat: "얼굴·이마·목·손등", skin: "목·겨드랑이·사타구니·눈꺼풀", water: "몸통·겨드랑이·얼굴 (소아)" },
  { category: "전염성", flat: "있음 (접촉 전파)", skin: "없음", water: "있음 (접촉 전파)" },
  { category: "증식 속도", flat: "느림~빠름 (면역 상태에 따라)", skin: "매우 느림", water: "중간 (수주~수개월)" },
  { category: "가려움", flat: "종종 있음", skin: "없음 (마찰 시 자극 통증)", water: "종종 있음" },
  { category: "치료 방법", flat: "면역 강화 + 한방 외치", skin: "물리적 제거 + 재발 방지", water: "면역 강화 + 외치" },
  { category: "자연 소실", flat: "가능 (수개월~수년)", skin: "거의 없음", water: "가능 (면역 회복 시)" },
];

export default function CompareSection() {
  return (
    <section id="compare" className="py-20 section-alt">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            비교표
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            편평사마귀 vs 쥐젖 vs 물사마귀<br />
            <span className="gradient-text">한눈에 비교</span>
          </h2>
          <p className="text-gray-600">
            비슷해 보이지만 원인과 치료법이 다릅니다. 정확한 진단이 먼저입니다.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-2xl shadow-lg border border-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="bg-gray-50 px-4 py-4 text-left text-sm font-bold text-gray-600 w-28">구분</th>
                <th className="bg-gradient-to-r from-purple-600 to-purple-700 px-4 py-4 text-center text-sm font-bold text-white">
                  🦠 편평사마귀
                </th>
                <th className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-4 text-center text-sm font-bold text-white">
                  🌿 쥐젖
                </th>
                <th className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-4 text-center text-sm font-bold text-white">
                  💧 물사마귀
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-purple-50/30"}>
                  <td className="px-4 py-4 text-sm font-semibold text-gray-700 border-r border-gray-100">
                    {row.category}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center border-r border-gray-100 whitespace-pre-line">
                    {row.flat}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center border-r border-gray-100 whitespace-pre-line">
                    {row.skin}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-700 text-center whitespace-pre-line">
                    {row.water}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="mt-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-bold mb-2">정확한 진단이 치료의 시작입니다</p>
          <p className="text-purple-100 text-sm mb-4">
            자가 판단은 치료를 지연시키거나 잘못된 방법으로 악화시킬 수 있습니다.
            리샘한의원에서 전문적인 감별 진단을 받아보세요.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-purple-700 font-bold px-6 py-3 rounded-full hover:bg-purple-50 transition-all"
          >
            진단 상담 예약하기 →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
