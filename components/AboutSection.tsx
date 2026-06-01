"use client";

import { motion } from "framer-motion";

const causes = [
  {
    icon: "🦠",
    title: "HPV 바이러스 감염",
    desc: "편평사마귀의 가장 근본적인 원인입니다. 인유두종 바이러스(HPV 3, 10형 등)가 피부 미세 상처를 통해 침투해 각질세포에 감염됩니다.",
  },
  {
    icon: "🛡️",
    title: "면역력 저하",
    desc: "과로, 스트레스, 수면 부족 등으로 면역 기능이 떨어지면 바이러스가 활성화되어 사마귀가 발생·증식합니다.",
  },
  {
    icon: "🤲",
    title: "피부 접촉 및 자가 전염",
    desc: "직접 접촉이나 수건·면도기 공유로 전파됩니다. 긁거나 만진 손으로 다른 부위를 건드리면 자가 전염이 일어납니다.",
  },
  {
    icon: "☀️",
    title: "자외선 및 피부 손상",
    desc: "과도한 자외선 노출로 피부 장벽이 약해지면 바이러스 침투가 쉬워집니다. 상처 부위에 우선적으로 발생하는 경향이 있습니다.",
  },
  {
    icon: "🧬",
    title: "호르몬 변화 및 유전적 요인",
    desc: "사춘기·임신기 호르몬 변화 시 면역 균형이 흔들려 발생하기 쉬우며, 유전적으로 HPV에 취약한 체질인 경우 재발률이 높아집니다.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            편평사마귀란?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            편평사마귀, 제대로 알아야<br />
            <span className="gradient-text">올바르게 치료</span>할 수 있습니다
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            편평사마귀(扁平疣贅)는 인유두종 바이러스(HPV)에 감염되어 피부 표면이 납작하게 돌출되는 양성 피부 병변입니다.
            주로 얼굴·이마·목·손등에 살색 또는 연갈색의 작은 구진이 다발성으로 생기며,
            미용적 문제뿐 아니라 전염성이 있어 조기 치료가 중요합니다.
          </p>
        </motion.div>

        {/* 발생 원인 5가지 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {causes.map((cause, i) => (
            <motion.div
              key={cause.title}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{cause.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                <span className="text-purple-500 mr-1">{i + 1}.</span>
                {cause.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{cause.desc}</p>
            </motion.div>
          ))}

          {/* 빈 자리 채우기용 강조 카드 */}
          <motion.div
            className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-6 text-white flex flex-col justify-center items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3">방치하면 안 되는 이유</h3>
            <p className="text-purple-100 text-sm leading-relaxed">
              편평사마귀는 자연 소실되는 경우도 있지만, 면역 저하 시 급격히 퍼지거나
              긁어서 악화될 수 있습니다. 초기에 전문 치료를 받는 것이 가장 효과적입니다.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
