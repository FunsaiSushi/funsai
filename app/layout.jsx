import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Funsai",
  description: "Made with fun by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${sourceCodePro.className}`}>
        {children}
      </body>
    </html>
  );
}
