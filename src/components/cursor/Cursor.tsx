"use client";

import LottieLoader from "../lottie/LottieLoader";
import { useEffect, useRef, useState } from "react";
import "./cursor.scss";
import cursorJson from "./cursor.json";
import { parseRGBStringToNumbers } from "@/utils/reusableFunctions";
//@ts-expect-error color converter doesn't have types
import { fromString } from "css-color-converter";
import { Data } from "@lottiefiles/dotlottie-react";
import { usePathname } from "next/navigation";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isMouseVisible, setIsMouseVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverElements, setHoverElements] = useState<HTMLElement[]>([]);
  const [lottieJson, setLottieJson] = useState<Data | null>(cursorJson);
  const pathname = usePathname();

  useEffect(() => {
    setIsHovered(false);
  }, [pathname]);

  useEffect(() => {
    const lottie = cursorJson;
    const fillColor: number[] | undefined =
      lottie.layers[0].shapes[0].it[2].c?.k;
    const strokeColor: number[] | undefined =
      lottie.layers[0].shapes[0].it[1].c?.k;

    function setLottieColor() {
      if (fillColor) {
        const foregroundCol = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground");

        const foregroundColFactored = parseRGBStringToNumbers(
          fromString(foregroundCol).toRgbString()
        );
        fillColor[0] = foregroundColFactored.red;
        fillColor[1] = foregroundColFactored.green;
        fillColor[2] = foregroundColFactored.blue;
      }

      if (strokeColor) {
        const bgCol = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--background");

        const bgColFactored = parseRGBStringToNumbers(
          fromString(bgCol).toRgbString()
        );
        strokeColor[0] = bgColFactored.red;
        strokeColor[1] = bgColFactored.green;
        strokeColor[2] = bgColFactored.blue;
      }
      setLottieJson({ ...lottie });
    }

    setLottieColor();

    const styleObserver = new MutationObserver(setLottieColor);

    styleObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => {
      styleObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    function handleMouse(e: MouseEvent) {
      const cursor = cursorRef.current;

      if (cursor) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = "translateX(-4px)";
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
      }

      setIsMouseVisible(true);
    }

    document.addEventListener("mousemove", handleMouse);
    return () => {
      document.removeEventListener("mousemove", handleMouse);
    };
  }, [hoverElements]);

  useEffect(() => {
    function onDocumentLeave() {
      setIsMouseVisible(false);
    }

    document.addEventListener("mouseleave", onDocumentLeave);

    return () => {
      document.removeEventListener("mouseleave", onDocumentLeave);
    };
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button");

    setHoverElements([...links, ...buttons]);

    const domElObserver = new MutationObserver(() => {
      const links = document.querySelectorAll("a");
      const buttons = document.querySelectorAll("button");
      const inputs = document.querySelectorAll("input");
      const textareas = document.querySelectorAll("textarea");
      const declarations = document.querySelectorAll(
        ".change-cursor"
      ) as NodeListOf<HTMLElement>;

      setHoverElements([
        ...links,
        ...buttons,
        ...inputs,
        ...textareas,
        ...declarations,
      ]);
    });

    domElObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      domElObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    hoverElements.forEach((el) => {
      el.onpointerenter = () => {
        setIsHovered(true);
      };
      el.onpointerleave = () => {
        setIsHovered(false);
      };
    });
  }, [hoverElements]);

  if (lottieJson) {
    return (
      <div
        className={`cursor__wrapper ${!isMouseVisible ? "hidden" : ""}`}
        ref={cursorRef}
      >
        <LottieLoader
          mode={isHovered ? "forward" : "reverse"}
          autoplay
          play={isHovered ? "forward" : "reverse"}
          lottieJson={lottieJson}
          width="22px"
          height="22px"
          speed={6}
        />
      </div>
    );
  }
}

export default Cursor;
