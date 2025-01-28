import "@/styles/global.scss";
import localFont from "next/font/local";

const cFont = localFont({
  src: [
    { path: "./fonts/ci.ttf", style: "regular" },
    { path: "./fonts/c.ttf", style: "regular" },
  ],
  preload: true,
  variable: "--gFont",
});

const nhFont = localFont({
  src: [
    { path: "./fonts/nh/nhdr.ttf", style: "normal", weight: "400" },
    { path: "./fonts/nh/nhdri.ttf", style: "italic", weight: "400" },
    { path: "./fonts/nh/nhdb.ttf", style: "normal", weight: "600" },
    { path: "./fonts/nh/nhdbi.ttf", style: "italic", weight: "600" },
    { path: "./fonts/nh/nhdl.ttf", style: "normal", weight: "200" },
    { path: "./fonts/nh/nhdli.ttf", style: "italic", weight: "200" },
    { path: "./fonts/nh/nhdm.ttf", style: "normal", weight: "500" },
    { path: "./fonts/nh/nhdmi.ttf", style: "italic", weight: "500" },
    { path: "./fonts/nh/nhdt.ttf", style: "normal", weight: "300" },
    { path: "./fonts/nh/nhdti.ttf", style: "italic", weight: "300" },
    { path: "./fonts/nh/nhdxt.ttf", style: "normal", weight: "20" },
    { path: "./fonts/nh/nhdxti.ttf", style: "italic", weight: "200" },
    { path: "./fonts/nh/nhdxxt.ttf", style: "normal", weight: "100" },
    { path: "./fonts/nh/nhdxxti.ttf", style: "italic", weight: "100" },
  ],
  preload: true,
  variable: "--nhFont",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nhFont.variable} ${cFont.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
