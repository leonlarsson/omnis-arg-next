import localFont from "next/font/local";
import "./globals.css";

const dinCondensed = localFont({
  src: [
    {
      path: "../public/fonts/DNC47.otf",
      weight: "300",
      style: "normal"
    },
    {
      path: "../public/fonts/DNC57.otf",
      weight: "400",
      style: "normal"
    }
  ]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-[100svh] overflow-y-scroll bg-gradient-to-bl from-neutral-950 to-neutral-900">
      <body className={`${dinCondensed.className} text-white`}>
        <div className="container mx-auto mt-10 px-4 pb-10 text-center transition-all">{children}</div>
      </body>
    </html>
  );
}
