import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "리샘한의원 | 편평사마귀·쥐젖 전문 클리닉",
  description: "분당 리샘한의원 편평사마귀, 쥐젖, 물사마귀 전문 한방 치료. 초특가 이벤트 진행 중. 경기도 성남시 분당구 정자역프라자 707호.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
