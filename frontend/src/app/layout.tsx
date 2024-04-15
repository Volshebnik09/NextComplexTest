import type { Metadata } from "next";
import "./globals.scss";
import {WithQueryClientProvider} from "@/app/providers/WithQueryClient";

export const metadata: Metadata = {
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <WithQueryClientProvider>
          {children}
      </WithQueryClientProvider>
      </body>
    </html>
  );
}
