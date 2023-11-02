import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liga POABP",
  description:
    "A Liga é um evento mensal de bikepolo organizado pelo PortoAlegreBikePolo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="lime" grayColor="slate">
          {children}
        </Theme>
      </body>
    </html>
  );
}
