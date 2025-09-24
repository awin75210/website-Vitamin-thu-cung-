import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./Component/providers";
import { Header } from "./Component/Header";
import Footer from "./Component/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitamin Thú Cưng - Cứu hộ, nhận nuôi & dịch vụ thú cưng",
  description:
    "Vitamin Thú Cưng là cộng đồng yêu thú cưng, mang đến dịch vụ cứu hộ, nhận nuôi chó mèo, cửa hàng phụ kiện, đặt lịch chăm sóc và tư vấn tận tâm. Hãy cùng chung tay đem lại mái ấm cho các bé thú cưng.",
  keywords: [
    "Vitamin Thú Cưng",
    "cứu hộ thú cưng",
    "nhận nuôi chó mèo",
    "cửa hàng thú cưng",
    "phụ kiện chó mèo",
    "dịch vụ thú cưng",
    "tư vấn thú cưng",
    "diễn đàn thú cưng",
    "chăm sóc thú cưng",
  ],
  authors: [{ name: "Vitamin Thú Cưng Team" }],
  openGraph: {
    title: "Vitamin Thú Cưng - Cứu hộ, nhận nuôi & dịch vụ thú cưng",
    description:
      "Cùng Vitamin Thú Cưng chung tay cứu hộ, nhận nuôi và chăm sóc các bé chó mèo. Mua sắm phụ kiện, đặt lịch dịch vụ và tham gia cộng đồng yêu thú cưng ngay hôm nay.",
    url: "https://website-vitamin-thu-cung.vercel.app/",
    siteName: "Vitamin Thú Cưng",
    images: [
      {
        url: "/BG-Home.png",
        width: 1736,
        height: 909,
        alt: "Vitamin Thú Cưng - Ngôi nhà cho thú cưng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          {" "}
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
