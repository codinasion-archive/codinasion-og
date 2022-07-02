import chrome from "chrome-aws-lambda";
import puppeteer from "puppeteer-core";

const default_width = 1024;
const default_height = 512;

export default async function getScreenshot(screenshot_data) {
  const { html, width = default_width, height = default_height } = screenshot_data;

  const options = process.env.AWS_REGION
    ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      }
    : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
            ? "/usr/bin/google-chrome"
            : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      };
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();

  await page.setViewport({ width: width, height: height });

  await page.setContent(html);

  const screenshotBuffer = await page.screenshot({ type: "png" });

  await page.close();

  return screenshotBuffer;
}
