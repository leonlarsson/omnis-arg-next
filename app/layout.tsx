import localFont from "next/font/local";
import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

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

export const metadata = {
  title: "The Omnis Challenge"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-[100svh] overflow-y-scroll bg-gradient-to-bl from-neutral-950 to-neutral-900">
      <body className={`${dinCondensed.className} text-white`}>
        <div className="my-3 text-center text-5xl">The Omnis Challenge</div>
        <div className="container mx-auto px-4 pb-10 text-center transition-all">{children}</div>
      </body>
    </html>
  );
}
