"use client";

import { Fade } from "react-awesome-reveal";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Fade>
          <main className="max-w-6xl mx-auto flex flex-col justify-center items-center my-28 px-4">
            <div className="w-full bg-main p-4">
              <h1 className="text-center text-4xl font-semibold">BOOKSTORE</h1>
            </div>
            {children}
          </main>
        </Fade>
      </body>
    </html>
  );
}
