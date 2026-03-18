import { uniqueByValue } from "./normalize.js";

function countValues(arr) {
  const map = new Map();
  for (const item of arr) {
    if (!item) continue;
    map.set(item, (map.get(item) || 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([value, count]) => ({ value, count }));
}

function pickTop(arr, limit = 12) {
  return countValues(arr).slice(0, limit);
}

export function groupComponents(elements) {
  const buttons = elements.filter(
    (e) =>
      e.tag === "button" ||
      (e.tag === "a" &&
        e.styles.padding &&
        e.styles.backgroundColor)
  );

  const headings = elements.filter((e) => /^h[1-6]$/.test(e.tag));
  const paragraphs = elements.filter((e) => e.tag === "p");
  const inputs = elements.filter((e) =>
    ["input", "textarea", "select"].includes(e.tag)
  );
  const links = elements.filter((e) => e.tag === "a");
  const containers = elements.filter(
    (e) =>
      ["section", "article", "div", "header", "footer", "nav"].includes(e.tag) &&
      (e.hasBackground || e.hasBorder || e.hasShadow)
  );

  return {
    buttons,
    headings,
    paragraphs,
    inputs,
    links,
    containers
  };
}

function summarizeComponent(list, limit = 5) {
  return list.slice(0, limit).map((e) => ({
    tag: e.tag,
    text: e.text,
    className: e.className,
    styles: {
      color: e.styles.color,
      backgroundColor: e.styles.backgroundColor,
      borderRadius: e.styles.borderRadius,
      fontSize: e.styles.fontSize,
      fontWeight: e.styles.fontWeight,
      padding: e.styles.padding,
      border: e.styles.border,
      boxShadow: e.styles.boxShadow
    }
  }));
}

export function buildDesignSystem(elements, grouped) {
  const colors = uniqueByValue([
    ...elements.map((e) => e.styles.color),
    ...elements.map((e) => e.styles.backgroundColor),
    ...elements.map((e) => e.styles.borderColor)
  ]);

  const fontFamilies = uniqueByValue(elements.map((e) => e.styles.fontFamily));
  const fontSizes = uniqueByValue(elements.map((e) => e.styles.fontSize));
  const fontWeights = uniqueByValue(elements.map((e) => e.styles.fontWeight));
  const radii = uniqueByValue(elements.map((e) => e.styles.borderRadius));
  const shadows = uniqueByValue(elements.map((e) => e.styles.boxShadow));

  return {
    meta: {
      extractedAt: new Date().toISOString(),
      totalElementsAnalyzed: elements.length
    },
    foundations: {
      colors: pickTop(colors, 20),
      typography: {
        fontFamilies: pickTop(fontFamilies, 10),
        fontSizes: pickTop(fontSizes, 12),
        fontWeights: pickTop(fontWeights, 10)
      },
      radius: pickTop(radii, 10),
      shadows: pickTop(shadows, 10)
    },
    components: {
      buttons: summarizeComponent(grouped.buttons),
      headings: summarizeComponent(grouped.headings),
      paragraphs: summarizeComponent(grouped.paragraphs),
      inputs: summarizeComponent(grouped.inputs),
      links: summarizeComponent(grouped.links),
      containers: summarizeComponent(grouped.containers)
    }
  };
}