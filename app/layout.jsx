import { Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Providers from "./ui/Providers";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
  title: "Funsai",
  description: "Made with fun by sushipop",
};

export default function RootLayout({ children, project }) {
  return (
    <html lang="en">
      <body className={`bg-black text-white px-2 ${sourceCodePro.className}`}>
        <Providers>
          {project}
          {children}
        </Providers>
      </body>
    </html>
  );
}
