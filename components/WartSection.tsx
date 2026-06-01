"use client";

import { motion } from "framer-motion";

const items = [
  {
    name: "물사마귀",
    emoji: "💧",
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    desc: "물사마귀(전염성 연속종, Molluscum Contagiosum)는 폭스바이러스 계열의 MCV에 감염되어 발생하는 피부 질환입니다.",
    features: [
      "중앙에 특징적인 배꼽 모양 함몰",
      "반투명·진주빛의 작고 둥근 구진",
      "소아에게 특히 흔함 (직접 접촉 전파)",
      "수영장·목욕탕 등 공중 위생시설 감염",
      "면역 정상인은 6~12개월 내 자연 소실 가능",
    ],
    warn: "성인에서 면역이 저하된 경우 200개 이상 광범위하게 퍼질 수 있습니다.",
  },
  {
    name: "쥐젖 (연성섬유종)",
    emoji: "🌿",
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    border: "border-pink-200",
    desc: "쥐젖(Skin Tag, Acrochordon)은 바이러스와 무관한 양성 피부 종양으로, 피부가 작게 늘어나 돌출된 형태입니다.",
    features: [
      "피부색~갈색의 연하고 말랑한 돌출 병변",
      "목·겨드랑이·사타구니·눈꺼풀에 주로 발생",
      "옷이나 장신구에 자주 걸려 자극·통증 유발",
      "비만, 임신, 고령에서 발생률 증가",
      "전염성 없음, 악성 변화 거의 없음",
    ],
    warn: "쥐젖을 집에서 실이나 손톱깎이로 제거하면 감염·흉터의 위험이 있습니다.",
  },
];

export default function WartSection() {
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
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            물사마귀 · 쥐젖
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            물사마귀와 쥐젖,<br />
            <span className="gradient-text">정확히 알고 치료</span>하세요
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            편평사마귀와 혼동하기 쉬운 물사마귀·쥐젖도 리샘한의원에서 함께 치료받으실 수 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              className={`bg-gradient-to-br ${item.bgColor} rounded-3xl overflow-hidden border ${item.border}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              {/* 헤더 */}
              <div className={`bg-gradient-to-r ${item.color} px-6 py-5 flex items-center gap-4`}>
                <div className="text-4xl">{item.emoji}</div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">{item.name}</h3>
                </div>
              </div>

              {/* 본문 */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{item.desc}</p>

                <h4 className="font-bold text-gray-700 mb-3">주요 특징</h4>
                <ul className="space-y-2 mb-5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-purple-500 mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-sm text-orange-700">
                  ⚠️ {item.warn}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
