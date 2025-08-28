/**
 * Fonts configuration for Lyonsco.
 * Primary: IBM Plex Sans
 * Secondary (mono): JetBrains Mono
 */
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

/** Public shape we rely on when consuming Next.js font objects */
export interface AppFont {
  className: string;
  variable: string;
}

/** IBM Plex Sans for headings, body, and UI */
const plexInternal = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});
export const plexSans: AppFont = {
  className: plexInternal.className,
  variable: plexInternal.variable ?? "--font-sans",
};

/** JetBrains Mono for specs, measurements, and technical UI */
const jetInternal = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});
export const jetBrainsMono: AppFont = {
  className: jetInternal.className,
  variable: jetInternal.variable ?? "--font-mono",
};