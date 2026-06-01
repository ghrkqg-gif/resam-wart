"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SHEET_ID = "1-L0KG6albv9NAT5s6kezQgiZlGEIY2w8XpR6psrY-GM";
const SHEET_NAME = "칼럼";
const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(SHEET_NAME)}`;

interface Column {
  id: string;
  title: string;
  content: string;
  youtube_url: string;
  date: string;
  visible: string;
}

function parseCSV(text: string): Column[] {
  const lines = text.trim().split("\n");
  if (lines.length < 2) return [];
  // 헤더 행 제거 (첫 번째 줄)
  return lines.slice(1).map((line) => {
    // CSV 파싱: 따옴표로 감싸진 필드 처리
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
      title: fields[1]?.trim() ?? "",
      content: fields[2]?.trim() ?? "",
      youtube_url: fields[3]?.trim() ?? "",
      date: fields[4]?.trim() ?? "",
      visible: fields[5]?.trim() ?? "",
    };
  });
}

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) {
      id = u.pathname.slice(1);
    } else if (u.searchParams.has("v")) {
      id = u.searchParams.get("v")!;
    } else if (u.pathname.includes("/shorts/")) {
      id = u.pathname.split("/shorts/")[1]?.split("/")[0];
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch {
    return null;
  }
}

function Modal({ item, onClose }: { item: Column; onClose: () => void }) {
  const embedUrl = getYoutubeEmbedUrl(item.youtube_url);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* 오버레이 */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />
        {/* 모달 */}
        <motion.div
          className="relative z-10 bg-gray-900 border border-teal-700/40 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-teal-900/30"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-colors z-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="p-6 md:p-8">
            {/* 날짜 + 제목 */}
            <div className="mb-5">
              {item.date && (
                <span className="text-teal-400 text-xs font-semibold mb-2 block">{item.date}</span>
              )}
              <h3 className="text-xl md:text-2xl font-extrabold text-white leading-snug">
                {item.title}
              </h3>
            </div>

            {/* 유튜브 영상 */}
            {embedUrl && (
              <div className="mb-6 rounded-2xl overflow-hidden aspect-video bg-black">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={item.title}
                />
              </div>
            )}

            {/* 본문 */}
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {item.content}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ColumnSection() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Column | null>(null);

  useEffect(() => {
    fetch(CSV_URL)
      .then((r) => {
        if (!r.ok) throw new Error("fetch failed");
        return r.text();
      })
      .then((text) => {
        const parsed = parseCSV(text).filter(
          (c) => c.visible?.toUpperCase() === "Y"
        );
        setColumns(parsed);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        {/* 헤더 */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-teal-900/60 text-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-teal-700/40">
            📝 리샘 칼럼
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            전문가가 직접 쓴{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
              건강 칼럼
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            편평사마귀·쥐젖에 관한 전문 지식과 치료 노하우를 나눕니다.
          </p>
        </motion.div>

        {/* 로딩 */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-2 border-teal-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* 에러 */}
        {error && (
          <div className="text-center py-16 text-gray-500">
            데이터를 불러오는 중 오류가 발생했습니다.
          </div>
        )}

        {/* 카드 그리드 */}
        {!loading && !error && columns.length === 0 && (
          <div className="text-center py-16 text-gray-500">등록된 칼럼이 없습니다.</div>
        )}

        {!loading && !error && columns.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {columns.map((col, i) => {
              const hasVideo = !!getYoutubeEmbedUrl(col.youtube_url);
              return (
                <motion.button
                  key={col.id || i}
                  onClick={() => setSelected(col)}
                  className="text-left bg-gray-900 border border-gray-800 hover:border-teal-600/60 rounded-2xl overflow-hidden group transition-all hover:shadow-xl hover:shadow-teal-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* 썸네일 영역 */}
                  <div className="relative h-40 bg-gradient-to-br from-teal-900/40 to-gray-800 flex items-center justify-center overflow-hidden">
                    {hasVideo ? (
                      <div className="w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                        <svg className="w-7 h-7 text-teal-300 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    ) : (
                      <span className="text-5xl opacity-30">📄</span>
                    )}
                    {hasVideo && (
                      <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        영상 포함
                      </span>
                    )}
                    {/* 호버 오버레이 */}
                    <div className="absolute inset-0 bg-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* 텍스트 */}
                  <div className="p-5">
                    {col.date && (
                      <span className="text-teal-500 text-xs font-medium">{col.date}</span>
                    )}
                    <h3 className="text-white font-bold text-base mt-1 mb-2 leading-snug group-hover:text-teal-200 transition-colors line-clamp-2">
                      {col.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {col.content}
                    </p>
                    <div className="mt-4 flex items-center text-teal-400 text-xs font-semibold">
                      자세히 보기
                      <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}
      </div>

      {/* 모달 */}
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
