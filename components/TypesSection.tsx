"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const types = [
  {
    id: "acute",
    label: "급성/양증성",
    emoji: "🔴",
    color: "from-red-50 to-orange-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700",
    title: "급성·양증성 편평사마귀",
    symptoms: [
      "갑자기 빠르게 번지는 양상",
      "가려움·발적 동반, 염증 반응 뚜렷",
      "주로 면역 저하 직후 또는 스트레스 후 발생",
      "병변이 붉거나 분홍빛을 띰",
    ],
    desc: "면역이 급격히 저하될 때 바이러스가 활성화되어 단기간에 넓은 범위로 번집니다. 빠른 대처가 필요합니다.",
    treatment: "항바이러스 면역 강화 치료 + 소염 한약",
  },
  {
    id: "mixed",
    label: "혼재형",
    emoji: "🟡",
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    title: "혼재형 편평사마귀",
    symptoms: [
      "편평사마귀 + 좁쌀여드름이 함께 존재",
      "경계 구분이 어렵고 오인하기 쉬움",
      "지성 피부에서 빈번히 발생",
      "자가 관리 중 악화되는 경우 많음",
    ],
    desc: "여드름성 피부와 사마귀 병변이 함께 나타나 일반 여드름 치료로 오히려 악화될 수 있는 유형입니다.",
    treatment: "정확한 감별 진단 후 복합 맞춤 치료",
  },
  {
    id: "chronic-early",
    label: "만성 초기",
    emoji: "🟢",
    color: "from-green-50 to-teal-50",
    border: "border-green-200",
    badge: "bg-green-100 text-green-700",
    title: "만성 초기 편평사마귀",
    symptoms: [
      "병변이 피부색과 유사해 발견이 늦음",
      "가려움 거의 없고 증상이 경미함",
      "수개월~수년 지속되는 경우",
      "개수가 서서히 늘어나는 양상",
    ],
    desc: "눈에 잘 띄지 않아 방치하기 쉽지만, 면역이 떨어지면 갑자기 급성으로 전환될 수 있어 주의가 필요합니다.",
    treatment: "면역 조절 + 한방 외치법 병행",
  },
  {
    id: "chronic-neglected",
    label: "방치된 만성",
    emoji: "🟤",
    color: "from-stone-50 to-amber-50",
    border: "border-stone-200",
    badge: "bg-stone-100 text-stone-700",
    title: "방치된 만성 편평사마귀",
    symptoms: [
      "수십~수백 개로 다발성 분포",
      "색소 침착·흉터 동반 가능",
      "이마·볼·목 전체로 넓게 분포",
      "자가 처치로 인한 이차 감염 흔함",
    ],
    desc: "오랜 기간 방치되거나 잘못된 자가 처치(짜거나 뜯기)로 악화된 상태입니다. 단계적·장기적 치료가 필요합니다.",
    treatment: "단계적 장기 치료 + 재발 방지 관리",
  },
  {
    id: "milia",
    label: "좁쌀여드름형",
    emoji: "⚪",
    color: "from-slate-50 to-blue-50",
    border: "border-slate-200",
    badge: "bg-slate-100 text-slate-700",
    title: "좁쌀여드름형 편평사마귀",
    symptoms: [
      "흰색·살색 작은 구진으로 여드름과 혼동",
      "코 주변·이마에 밀집 분포",
      "짜도 내용물이 없거나 소량",
      "기존 여드름 치료에 반응하지 않음",
    ],
    desc: "좁쌀여드름과 외관이 유사해 잘못 치료받는 경우가 많습니다. 정확한 감별이 치료 성공의 핵심입니다.",
    treatment: "정밀 감별 진단 후 편평사마귀 전용 치료",
  },
];

export default function TypesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="types" className="py-20 section-alt">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-pink-100 text-pink-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            다양한 양상
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            편평사마귀, <span className="gradient-text">5가지 양상</span>을 확인하세요
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            편평사마귀는 면역 상태와 경과에 따라 다양한 형태로 나타납니다.
            본인의 증상과 가장 유사한 유형을 확인해보세요.
          </p>
        </motion.div>

        {/* 탭 버튼 */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {types.map((type, i) => (
            <button
              key={type.id}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-purple-300"
              }`}
            >
              {type.emoji} {type.label}
            </button>
          ))}
        </div>

        {/* 상세 카드 */}
        {types.map((type, i) => (
          <motion.div
            key={type.id}
            className={`bg-gradient-to-br ${type.color} rounded-3xl p-8 border ${type.border} ${active === i ? "block" : "hidden"}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <span className={`inline-block ${type.badge} text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                  유형 {i + 1}
                </span>
                <h3 className="text-2xl font-extrabold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{type.desc}</p>
                <div className="bg-white/70 rounded-xl px-5 py-4">
                  <div className="text-sm font-bold text-purple-700 mb-1">권장 치료 방향</div>
                  <div className="text-gray-700 text-sm">{type.treatment}</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-4">주요 증상 특징</h4>
                <ul className="space-y-3">
                  {type.symptoms.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="mt-0.5 w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="#contact"
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-all"
                  >
                    이 유형 상담 신청하기 →
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
