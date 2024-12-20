import "~/styles/globals.css";

import { type Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider"
import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";


const OpenSans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Insight Harbor",
  description: "A datalake libarary for all your data needs",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={OpenSans.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
