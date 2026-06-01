"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SHEET_ID = "1-L0KG6albv9NAT5s6kezQgiZlGEIY2w8XpR6psrY-GM";
const SHEET_NAME = "후기";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

interface Review {
  id: string;
  name: string;
  category: string;
  content: string;
  rating: string;
  visible: string;
}

function parseCSV(text: string): Review[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  return lines.slice(1).map((line) => {
    const fields: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        fields.push(current);
        current = "";
      } else {
        current += ch;
      }
    }
    fields.push(current);
    return {
      id: fields[0]?.trim() ?? "",
      name: fields[1]?.trim() ?? "",
      category: fields[2]?.trim() ?? "",
      content: fields[3]?.trim() ?? "",
      rating: fields[4]?.trim() ?? "",
      visible: fields[5]?.trim() ?? "",
    };
  });
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const CATEGORY_COLORS: Record<string, string> = {
  편평사마귀: "bg-purple-900/50 text-purple-300 border-purple-700/40",
  쥐젖: "bg-pink-900/50 text-pink-300 border-pink-700/40",
  물사마귀: "bg-blue-900/50 text-blue-300 border-blue-700/40",
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "bg-teal-900/50 text-teal-300 border-teal-700/40";
}

const AVATAR_COLORS = [
  "from-purple-500 to-violet-600",
  "from-pink-500 to-rose-500",
  "from-teal-500 to-cyan-500",
  "from-amber-500 to-orange-500",
  "from-blue-500 to-indigo-500",
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(CSV_URL)
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.text();
      })
      .then((text) => {
        const parsed = parseCSV(text).filter(
          (r) => r.visible?.toUpperCase() === "Y"
        );
        setReviews(parsed);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  // 평균 별점 계산
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((acc, r) => acc + (parseFloat(r.rating) || 0), 0) /
        reviews.length
      : 0;

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-yellow-900/40 text-yellow-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-yellow-700/30">
            ⭐ 실제 환자 후기
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            리샘한의원을 다녀간{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              환자분들의 이야기
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            실제 치료를 받으신 환자분들의 솔직한 후기입니다.
          </p>

          {/* 평균 별점 표시 */}
          {!loading && reviews.length > 0 && (
            <div className="inline-flex items-center gap-3 bg-gray-800/60 border border-gray-700/50 rounded-2xl px-6 py-3">
              <div className="text-4xl font-extrabold text-white">{avgRating.toFixed(1)}</div>
              <div>
                <Stars rating={Math.round(avgRating)} />
                <div className="text-gray-400 text-xs mt-1">총 {reviews.length}개 후기</div>
              </div>
            </div>
          )}
        </motion.div>

        {/* 로딩 */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* 에러 */}
        {error && (
          <div className="text-center py-16 text-gray-500">
            데이터를 불러오는 중 오류가 발생했습니다.
          </div>
        )}

        {/* 후기 없음 */}
        {!loading && !error && reviews.length === 0 && (
          <div className="text-center py-16 text-gray-500">등록된 후기가 없습니다.</div>
        )}

        {/* 카드 그리드 */}
        {!loading && !error && reviews.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => {
              const rating = Math.min(5, Math.max(0, parseInt(review.rating) || 0));
              const avatarColor = AVATAR_COLORS[i % AVATAR_COLORS.length];
              const initial = review.name?.charAt(0) ?? "?";

              return (
                <motion.div
                  key={review.id || i}
                  className="bg-gray-800/60 border border-gray-700/50 hover:border-gray-600/60 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:shadow-black/30"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  {/* 상단: 아바타 + 이름 + 카테고리 */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarColor} flex items-center justify-center text-white font-bold text-base flex-shrink-0`}
                    >
                      {initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm truncate">{review.name}</div>
                      {review.category && (
                        <span
                          className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mt-0.5 ${getCategoryColor(review.category)}`}
                        >
                          {review.category}
                        </span>
                      )}
                    </div>
                    <Stars rating={rating} />
                  </div>

                  {/* 별점 숫자 */}
                  <div className="flex items-center gap-1">
                    {rating > 0 && (
                      <span className="text-yellow-400 text-xs font-bold">
                        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
                      </span>
                    )}
                  </div>

                  {/* 후기 내용 */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        {!loading && reviews.length > 0 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg shadow-teal-900/30"
            >
              나도 치료 시작하기 →
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
