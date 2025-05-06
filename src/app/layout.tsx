import { poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "SIMBI – AI Study Buddy",
  description: "Your AI Study Buddy",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
}
