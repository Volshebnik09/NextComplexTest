import type {Metadata} from "next";
import "./globals.scss";
import {WithQueryClientProvider} from "@/app/providers/WithQueryClient";
import {Inter} from 'next/font/google'
import {WithStore} from "@/app/providers/WithStore";

export const metadata: Metadata = {};

const inter = Inter({subsets: ['latin'], variable: "--font-inter"})

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
          className={`${inter.variable}`}
    >
    <body>
    <WithStore>
      <WithQueryClientProvider>
        {children}
      </WithQueryClientProvider>
    </WithStore>
    </body>
    </html>
  );
}
