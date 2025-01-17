"use client";

import Nav from "@/components/Nav/Nav";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  return (
    <div>
      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          width: "100%",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <ReactPlayer
          width={"200%"}
          height={"200%"}
          style={{ transform: "translate(-25%, -25%" }}
          url={
            "https://www.youtube.com/watch?v=3lEOK-hant8&ab_channel=BenPrideaux"
          }
          loop
          playing
          muted
          config={{ youtube: { playerVars: { disablekb: 1 } } }}
        />
      </div>
      <Nav />
    </div>
  );
}
