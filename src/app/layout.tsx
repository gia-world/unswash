import Header from "@/components/Header";
import LikePhotoProvider from "@/context/LikePhotoContext";
import QueryContext from "@/context/QueryContext";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mst = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unswash",
  description: "Unswash - Image Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[mst.className, "flex flex-col min-h-screen"].join(" ")}>
        <QueryContext>
          <LikePhotoProvider>
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <div id="portal" />
          </LikePhotoProvider>
        </QueryContext>
      </body>
    </html>
  );
}
