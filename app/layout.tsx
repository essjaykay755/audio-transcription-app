import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "./providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoxScribe - Audio Transcription Made Simple",
  description: "Transform your audio into text with cutting-edge AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="voxscribe-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
