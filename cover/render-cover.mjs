import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Рендер обложки 600×600 в PNG.
 * Требуется puppeteer-core и установленный Edge/Chrome:
 *   npm i -D puppeteer-core
 *   node cover/render-cover.mjs
 * Путь к cover.html и папке вывода считаются от этого файла.
 */

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const DIR = path.dirname(fileURLToPath(import.meta.url));
const FILE = "file:///" + path.join(DIR, "cover.html").replace(/\\/g, "/");
const OUT = DIR;

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: true,
  args: ["--hide-scrollbars", "--force-color-profile=srgb", "--font-render-hinting=none", "--disable-lcd-text"],
});

const page = await browser.newPage();
await page.setViewport({ width: 600, height: 600, deviceScaleFactor: 1 });
await page.goto(FILE, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

await page.screenshot({ path: path.join(OUT, "cover-600.png") });
console.log("cover-600.png");

await page.setViewport({ width: 600, height: 600, deviceScaleFactor: 2 });
await new Promise((r) => setTimeout(r, 700));
await page.screenshot({ path: path.join(OUT, "cover-600@2x.png") });
console.log("cover-600@2x.png");

await browser.close();
