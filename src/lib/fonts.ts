import { Baloo_Thambi_2 } from "next/font/google";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";

export const balooThambi2 = Baloo_Thambi_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});
