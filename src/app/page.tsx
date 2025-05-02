import TelegramConnect from "@/components/telegram/TelegramConnect";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">

      <TelegramConnect />
    </main>
  );
}
