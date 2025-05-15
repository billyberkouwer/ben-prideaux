"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { disableDraftMode } from "@/app/actions";
import "./disable-draft-mode.scss";

export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  if (window !== window.parent || !!window.opener) {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div className="disable-draftmode__wrapper">
      <div style={{ display: isButtonHovered ? "block" : "none", textAlign: "right" }}>
        You`re currently viewing the page in draft mode.<br /> Only you can see this
        version of the site.
      </div>
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button
          type="button"
          onClick={disable}
          onPointerOver={() => setIsButtonHovered(true)}
          onPointerLeave={() => setIsButtonHovered(false)}
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
