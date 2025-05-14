import { poppins } from "@/lib/fonts";
import "./globals.css";
import ClientAuthProvider from "@/components/auth/ClientAuthProvider";
import { Toaster } from "react-hot-toast";

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
      <body className={poppins.variable}>
        <ClientAuthProvider>{children}</ClientAuthProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: { borderRadius: "8px", background: "#333", color: "#fff" },
          }}
        />
      </body>
    </html>
  );
}
