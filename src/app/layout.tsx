"use client";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.css";
import data from "../data.json";
import { TotalBooksContext, initialTotalBooksData } from "@/lib/context";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [totalBooksData, setTotalBooksData] = useState(initialTotalBooksData);
  return (
    <html lang="en">
      <body>
        <main className="max-w-6xl mx-auto flex flex-col justify-center items-center my-28 px-4">
          <div className="w-full bg-main p-4">
            <h1 className="text-center text-4xl font-semibold">Bookstore</h1>
          </div>
          <Breadcrumb />
          <TotalBooksContext.Provider
            value={{ totalBooksData, setTotalBooksData }}
          >
            {children}
          </TotalBooksContext.Provider>
        </main>
      </body>
    </html>
  );
}
