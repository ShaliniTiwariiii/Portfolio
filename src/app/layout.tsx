import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shalini Tiwari | Full Stack Developer",
  description: "Portfolio of Shalini Tiwari, a Full Stack Developer specializing in React.js, Next.js, Java, and Spring Boot.",
  openGraph: {
    title: "Shalini Tiwari | Full Stack Developer",
    description: "Portfolio of Shalini Tiwari, a Full Stack Developer specializing in React.js, Next.js, Java, and Spring Boot.",
    url: "https://shalinitiwari.dev",
    siteName: "Shalini Tiwari Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 z-[-1] bg-background">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-50 blur-[100px]"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
