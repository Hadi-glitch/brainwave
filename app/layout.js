import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { AppProvider } from "./context/AppContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Brainwave",
  description: "AI image generator",
  icons: {
    icon: "/assets/brainwave-symbol.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <AppProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </html>
      </AppProvider>
    </ClerkProvider>
  );
}
