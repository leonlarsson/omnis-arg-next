import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import "/public/fontawesome/css/fontawesome.min.css";
import "/public/fontawesome/css/solid.min.css";
import "/public/fontawesome/css/brands.min.css";

const dinCondensed = localFont({
  src: [
    {
      path: "../public/fonts/DNC47.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/DNC57.otf",
      weight: "500",
      style: "normal"
    }
  ]
});

export const metadata = {
  title: "The Omnis Challenge"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="min-h-[100svh] overflow-y-scroll">
      <body className={`${dinCondensed.className} bg-cover bg-fixed bg-center bg-no-repeat text-white`} style={{ backgroundImage: "url('./images/bg.webp')" }}>
        <div className="my-3 text-center text-5xl">
          <Link className="underline transition-colors hover:text-bloodhunt-red" href="/">
            The Omnis Challenge
          </Link>
        </div>
        <div className="container mx-auto px-4 pb-10 text-center transition-all">{children}</div>
      </body>
    </html>
  );
}
