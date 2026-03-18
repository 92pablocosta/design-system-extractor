export function normalizeColor(value) {
  if (!value) return null;
  const v = value.trim();
  if (v === "rgba(0, 0, 0, 0)" || v === "transparent") return null;
  return v;
}

export function normalizeSize(value) {
  if (!value) return null;
  const v = value.trim();
  if (v === "normal" || v === "auto") return v;
  return v.replace(/\s+/g, " ");
}

export function cleanFontFamily(font) {
  if (!font) return null;
  return font
    .split(",")
    .map((f) => f.trim().replace(/^["']|["']$/g, ""))
    .join(", ");
}

export function uniqueByValue(arr) {
  return [...new Set(arr.filter(Boolean))];
}