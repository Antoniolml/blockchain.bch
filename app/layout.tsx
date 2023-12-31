import "./globals.css";
import { clsxm } from "@/utils";
import { Metadata } from "next";
import localFont from "next/font/local";

const neueMontreal = localFont({
  src: [
    {
      path: "../assets/fonts/PPNeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Semibold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-SemiBoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/PPNeueMontreal-BoldItalic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-neue",
});

const lilex = localFont({
  src: [
    {
      path: "../assets/fonts/Lilex-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Lilex-Medium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-lilex",
});

interface IRootLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html
      lang="en"
      className={clsxm(
        "bg-black text-white antialiased",
        neueMontreal.variable,
        lilex.variable
      )}
    >
      <body className="min-h-screen bg-black text-white bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
