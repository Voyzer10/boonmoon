import "./globals.css";
import Header from "./compoments/Header";
import FloatingContactButton from "./compoments/FloatingContactButton";

export const metadata = {
  title: "Bonn Moon Trading",
  description: "Global import & export excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">
        {/* ✅ HEADER — ONLY ONCE */}
        <Header />

        {/* ✅ PAGE CONTENT — NO EXTRA TOP PADDING */}
        {children}

        <FloatingContactButton />
      </body>
    </html>
  );
}
