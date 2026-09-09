import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramya S | Python Full Stack Developer",
  description: "Portfolio of Ramya S, a Python Full Stack Developer skilled in React, JavaScript, Python, Flask and SQL.",
  openGraph: { title: "Ramya S | Python Full Stack Developer", description: "Explore Ramya S’s projects, skills, education and professional experience.", type: "website" },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
