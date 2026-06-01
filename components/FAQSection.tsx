"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "편평사마귀는 치료하지 않으면 자연적으로 없어지나요?",
    a: "면역이 충분히 강하다면 수개월~수년에 걸쳐 자연 소실되기도 합니다. 그러나 그 기간 동안 계속 주변으로 퍼지거나 타인에게 전염될 수 있고, 면역이 저하되면 오히려 급격히 증가할 수 있습니다. 조기에 전문 치료를 받는 것이 가장 안전하고 효과적입니다.",
  },
  {
    q: "레이저로 제거하면 재발하지 않나요?",
    a: "레이저 시술은 병변을 물리적으로 제거하지만, 바이러스(HPV) 자체를 제거하지는 못합니다. 면역 치료 없이 레이저만 반복하면 흉터가 생기거나 더 많은 부위로 퍼지는 경우가 있습니다. 리샘한의원에서는 근본적인 면역 강화와 함께 치료합니다.",
  },
  {
    q: "치료 기간은 얼마나 걸리나요?",
    a: "개인의 면역 상태, 발생 범위, 증상 기간에 따라 다릅니다. 초기 소수 병변의 경우 1~2개월, 만성 광범위한 경우 3~6개월 이상 소요될 수 있습니다. 첫 진료 시 정확한 기간을 안내드리며 단계별 치료 계획을 세웁니다.",
  },
  {
    q: "쥐젖은 집에서 제거해도 되나요?",
    a: "절대 권장하지 않습니다. 실로 묶거나 손톱깎이로 자르면 출혈, 세균 감염, 흉터가 생길 수 있습니다. 특히 얼굴·목처럼 눈에 잘 띄는 부위에는 흉터가 남을 위험이 높습니다. 전문 의료기관에서 안전하게 처치받으시길 권합니다.",
  },
  {
    q: "물사마귀와 편평사마귀를 동시에 치료받을 수 있나요?",
    a: "네, 리샘한의원에서는 두 가지를 동시에 진단하고 치료합니다. 면역 강화 한약을 기본으로 하면서 각 병변의 특성에 맞는 외치 처치를 병행합니다. 함께 치료받으시면 비용과 시간 모두 효율적입니다.",
  },
  {
    q: "임산부도 치료받을 수 있나요?",
    a: "임산부는 호르몬 변화로 쥐젖이 급격히 늘거나 편평사마귀가 악화될 수 있습니다. 내복 한약은 임신 주수와 상태에 따라 신중히 처방하며, 주로 안전한 외치법 위주로 치료를 진행합니다. 반드시 임산부임을 미리 알려주세요.",
  },
  {
    q: "치료 후 일상생활이 바로 가능한가요?",
    a: "한방 외치 처치 후 대부분 당일 일상생활이 가능합니다. 처치 부위에 자극을 피하고, 처음 1~2일은 세안 시 주의가 필요합니다. 시술 후 주의사항을 자세히 안내드립니다.",
  },
  {
    q: "한방 치료가 양방 치료보다 효과적인 이유가 있나요?",
    a: "한방 치료의 핵심은 바이러스에 대한 면역 기능을 근본적으로 강화하는 것입니다. 단순히 병변을 없애는 것에 그치지 않고, 재발을 막을 수 있는 체내 면역 환경을 만드는 데 초점을 맞춥니다. 외치법과 내치(면역 한약)를 함께 사용하여 효과를 높입니다.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-gray-600">궁금하신 점은 언제든지 편하게 질문해 주세요</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-4">
                  <span className="text-purple-500 mr-2">Q.</span>
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white transition-transform ${open === i ? "rotate-45" : ""}`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <div className="bg-purple-50 rounded-xl px-5 py-4 text-gray-700 text-sm leading-relaxed">
                        <span className="text-purple-600 font-bold mr-2">A.</span>
                        {faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
