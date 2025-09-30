import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { APP_CONFIG } from "@/config/app-config";
import { getPreference } from "@/server/server-actions";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";
import { THEME_MODE_VALUES, THEME_PRESET_VALUES, type ThemePreset, type ThemeMode } from "@/types/preferences/theme";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_CONFIG.meta.title,
  description: APP_CONFIG.meta.description,
  keywords: APP_CONFIG.meta.keywords,
  authors: [{ name: APP_CONFIG.meta.author }],
  creator: APP_CONFIG.meta.author,
  publisher: APP_CONFIG.meta.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lasvegasrealestate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: APP_CONFIG.meta.title,
    description: APP_CONFIG.meta.description,
    url: 'https://lasvegasrealestate.com',
    siteName: APP_CONFIG.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Real Estate Expert - Dr. Janet Duffy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_CONFIG.meta.title,
    description: APP_CONFIG.meta.description,
    images: ['/og-image.jpg'],
    creator: '@lasvegasrealtor',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const themeMode = await getPreference<ThemeMode>("theme_mode", THEME_MODE_VALUES, "light");
  const themePreset = await getPreference<ThemePreset>("theme_preset", THEME_PRESET_VALUES, "default");

  return (
    <html
      lang="en"
      className={themeMode === "dark" ? "dark" : ""}
      data-theme-preset={themePreset}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-screen antialiased`}>
        <PreferencesStoreProvider themeMode={themeMode} themePreset={themePreset}>
          {children}
          <Toaster />
        </PreferencesStoreProvider>
      </body>
    </html>
  );
}
