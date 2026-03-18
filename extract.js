import fs from "fs";
import path from "path";
import { chromium } from "playwright";
import {
  normalizeColor,
  normalizeSize,
  cleanFontFamily,
  uniqueByValue
} from "./utils/normalize.js";
import {
  buildDesignSystem,
  groupComponents
} from "./utils/tokens.js";
import { buildAIContext } from "./utils/prompt.js";

const OUTPUT_DIR = "./output";
const TARGET_URL = process.argv[2];

if (!TARGET_URL) {
  console.error("Uso: node extract.js https://site.com");
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const SELECTORS = [
  "button",
  "a",
  "input",
  "textarea",
  "select",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
  "section",
  "article",
  "header",
  "footer",
  "nav",
  "img",
  "div"
];

function isUsefulElement(data) {
  const text = (data.text || "").trim();
  const rect = data.rect || {};
  const width = rect.width || 0;
  const height = rect.height || 0;

  if (width < 20 || height < 12) return false;
  if (data.tag === "div" && !text && !data.hasBackground && !data.hasBorder && !data.hasShadow) {
    return false;
  }
  return true;
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 3000 }
  });

  await page.goto(TARGET_URL, { waitUntil: "networkidle", timeout: 60000 });

  const extracted = await page.evaluate((selectors) => {
    function pick(el) {
      const s = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();

      const text = (el.innerText || el.textContent || "").trim().slice(0, 120);

      const backgroundColor = s.backgroundColor;
      const color = s.color;
      const borderColor = s.borderColor;
      const borderRadius = s.borderRadius;
      const fontSize = s.fontSize;
      const fontWeight = s.fontWeight;
      const fontFamily = s.fontFamily;
      const lineHeight = s.lineHeight;
      const letterSpacing = s.letterSpacing;
      const padding = `${s.paddingTop} ${s.paddingRight} ${s.paddingBottom} ${s.paddingLeft}`;
      const margin = `${s.marginTop} ${s.marginRight} ${s.marginBottom} ${s.marginLeft}`;
      const boxShadow = s.boxShadow;
      const border = s.border;
      const display = s.display;
      const gap = s.gap;
      const textTransform = s.textTransform;

      return {
        tag: el.tagName.toLowerCase(),
        className: el.className || "",
        id: el.id || "",
        text,
        rect: {
          width: Math.round(rect.width),
          height: Math.round(rect.height)
        },
        styles: {
          color,
          backgroundColor,
          borderColor,
          borderRadius,
          fontSize,
          fontWeight,
          fontFamily,
          lineHeight,
          letterSpacing,
          padding,
          margin,
          boxShadow,
          border,
          display,
          gap,
          textTransform
        },
        hasBackground:
          backgroundColor &&
          backgroundColor !== "rgba(0, 0, 0, 0)" &&
          backgroundColor !== "transparent",
        hasBorder:
          border &&
          border !== "0px none rgb(0, 0, 0)" &&
          border !== "none 0px rgb(0, 0, 0)",
        hasShadow: boxShadow && boxShadow !== "none"
      };
    }

    const elements = [];
    const seen = new Set();

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (!el || !el.isConnected) return;

        const key = `${el.tagName}-${el.className}-${el.id}-${el.innerText?.slice(0, 20)}`;
        if (seen.has(key)) return;
        seen.add(key);

        elements.push(pick(el));
      });
    });

    return elements;
  }, SELECTORS);

  await browser.close();

  const cleaned = extracted
    .map((el) => {
      const s = el.styles;

      return {
        ...el,
        styles: {
          ...s,
          color: normalizeColor(s.color),
          backgroundColor: normalizeColor(s.backgroundColor),
          borderColor: normalizeColor(s.borderColor),
          borderRadius: normalizeSize(s.borderRadius),
          fontSize: normalizeSize(s.fontSize),
          lineHeight: normalizeSize(s.lineHeight),
          letterSpacing: normalizeSize(s.letterSpacing),
          fontFamily: cleanFontFamily(s.fontFamily)
        }
      };
    })
    .filter(isUsefulElement);

  const grouped = groupComponents(cleaned);
  const designSystem = buildDesignSystem(cleaned, grouped);
  const aiContext = buildAIContext(designSystem, TARGET_URL);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "design-system.json"),
    JSON.stringify(designSystem, null, 2),
    "utf-8"
  );

  fs.writeFileSync(
    path.join(OUTPUT_DIR, "ai-context.md"),
    aiContext,
    "utf-8"
  );

  console.log("Extração concluída.");
  console.log("Arquivos gerados:");
  console.log("- output/design-system.json");
  console.log("- output/ai-context.md");
}

run().catch((err) => {
  console.error("Erro ao extrair:", err);
  process.exit(1);
});