import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {!!process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
      <body className={notoSansJP.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
