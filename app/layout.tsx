import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cold to Warm Leads',
  description: 'Turn cold leads into warm sales with automation + daily human oversight. Real people managing your system, not just bots. Start at $50/month.',
  keywords: 'realtor automation, cold lead nurture, real estate follow-up system, realtor software Edmonton, lead automation, managed services',
  icons: '/favicon.ico', // Add this line
  openGraph: {
    title: 'Cold to Warm Leads | Realtor Automation System',
    description: 'Automation + human oversight. We handle the follow-up with real people monitoring daily. You focus on closing deals.',
    url: 'https://coldtowarmleads.ca',
    type: 'website',
    images: [
      {
        url: 'https://coldtowarmleads.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cold to Warm Leads - Realtor Automation Partnership with Human Oversight',
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}