# Design System Extractor

A tool that automatically extracts a design system from any live website and transforms it into structured data that can be used by AI models to generate new interfaces.

---

## Overview

This project uses browser automation to analyze a webpage and extract its visual language, including:

- Colors
- Typography
- Spacing
- Borders and radius
- Shadows
- UI components (buttons, inputs, headings, etc.)

Instead of copying raw HTML/CSS, it converts everything into a structured design system, making it ideal for:

- AI-powered UI generation
- Reverse engineering design patterns
- Building consistent landing pages
- Creating reusable design tokens

---

## How It Works

1. Launches a browser using Playwright
2. Loads the target website
3. Scans key DOM elements (buttons, text, containers, etc.)
4. Extracts computed styles (real rendered styles)
5. Normalizes and cleans the data
6. Groups elements into components
7. Generates output files

---

## Outputs

- `design-system.json` → structured design tokens
- `ai-context.md` → ready-to-use prompt for AI models

---

## Project Structure

design-system-extractor/
├─ extract.js
├─ package.json
├─ utils/
│ ├─ normalize.js
│ ├─ tokens.js
│ └─ prompt.js
└─ output/
├─ design-system.json
└─ ai-context.md

---

## Installation

Clone the repository:
https://github.com/92pablocosta/design-system-extractor

cd design-system-extractor

## Install dependencies:

npm install

## Install Playwright browsers:

npx playwright install

---

## Usage

Run the extractor with a target URL:
node extract.js https://example.com
