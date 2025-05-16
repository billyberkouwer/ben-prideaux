export const listOptions: { title: string; value: number }[] = Array(12).fill("").map((el, i) => ({ title: i + 1 + " column" + (i > 0 ? "s" : ""), value: i + 1 }));

export const defaultBackground = "#f5f5f5";
export const defaultForeground = "#212121";