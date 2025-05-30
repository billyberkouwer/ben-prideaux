import type { Metadata } from "next";
import { Cormorant } from "next/font/google";
import "@/styles/global.scss";
import "@/styles/bootstrap/bootstrap-grid.scss";
import localFont from "next/font/local";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import PageWrapper from "@/components/Page/PageWrapper";
import { DisableDraftMode } from "@/components/DisableDraftMode/DisableDraftMode";
import NavBar from "@/components/Nav/NavBar";
import Footer from "@/components/Footer/Footer";

const GNU = localFont({
  src: "./fonts/GNUGrotesk-VF.ttf",
  variable: "--font-gnu",
  display: "swap",
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${GNU.variable}`}>
        <PageWrapper footer={<Footer />} navBar={<NavBar />}>
          {children}
        </PageWrapper>
        <SanityLive />
        {(await draftMode()).isEnabled ? (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        ) : null}
      </body>
    </html>
  );
}
