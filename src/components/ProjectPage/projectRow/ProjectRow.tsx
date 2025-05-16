import { ReactNode } from "react";
import "./project-row.scss";

export default function ProjectRow({
  hasPadding = false,
  children,
}: {
  hasPadding?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={`project-row__container row gx-2 ${hasPadding ? "my-5 py-5" : ""}`}
    >
      {children}
    </div>
  );
}
