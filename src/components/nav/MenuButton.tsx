"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import LottieLoader from "../lottie/LottieLoader";
import MenuJson from "./menu-button.json";
import { Data, DotLottie } from "@lottiefiles/dotlottie-react";
import { parseRGBStringToNumbers } from "@/utils/reusableFunctions";
//@ts-expect-error color converter doesn't have types
import { fromString } from "css-color-converter";
import { NavColorContext } from "@/utils/context";

export default function MenuButton() {
  const { isMenuOpen, setIsMenuOpen } = useContext(NavColorContext);
  const [lottieJson, setLottieJson] = useState<Data | null>(null);

  useEffect(() => {
    const page = document.querySelector(".page__wrapper") as
      | HTMLElement
      | undefined;

    if (page) {
      if (isMenuOpen) {
        page.classList.add("open");
      }
      if (!isMenuOpen) {
        page.classList.remove("open");
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const lottie = MenuJson;
    const strokeCol1: number[] | undefined =
      lottie.layers[0].shapes[0].it[1].c?.k;
    const strokeCol2: number[] | undefined =
      lottie.layers[0].shapes[1].it[1].c?.k;

    function setLottieColor() {
      if (strokeCol1) {
        const foregroundCol = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground");

        const foregroundColFactored = parseRGBStringToNumbers(
          fromString(foregroundCol).toRgbString()
        );
        strokeCol1[0] = foregroundColFactored.red;
        strokeCol1[1] = foregroundColFactored.green;
        strokeCol1[2] = foregroundColFactored.blue;
      }

      if (strokeCol2) {
        const bgCol = window
          .getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground");

        const bgColFactored = parseRGBStringToNumbers(
          fromString(bgCol).toRgbString()
        );
        strokeCol2[0] = bgColFactored.red;
        strokeCol2[1] = bgColFactored.green;
        strokeCol2[2] = bgColFactored.blue;
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

  const setFrame = useCallback((lottie: DotLottie) => {
    lottie.setFrame(0);
  }, []);

  return (
    <span className="menu-button__wrapper col-1 offset-5">
      <button
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <LottieLoader
          autoplay
          width={20}
          height={20}
          speed={4}
          lottieJson={lottieJson}
          play={isMenuOpen ? "forward" : "reverse"}
          setFrame={setFrame}
          mode={isMenuOpen ? "forward" : "reverse"}
        />
      </button>
    </span>
  );
}
