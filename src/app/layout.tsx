import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "더현대 스타일 매장 추천",
  description: "단계별 선택으로 맞춤 매장을 추천합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`bg-green-900 min-h-screen ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}
