import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export async function getOptions() {
  const isDev = !process.env.AWS_REGION;
  let options;

  const chromeExecPaths = {
    win32: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    linux: '/usr/bin/google-chrome',
    darwin: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  };

  const exePath = chromeExecPaths[process.platform];

  if (isDev) {
    options = {
      args: [],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }

  return options;
}

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000';

export async function getScreenshot(title, type, description) {
  const options = await getOptions();
  const browser = await puppeteer.launch(options);

  const page = await browser.newPage();
  await page.goto(
    `${BASE_URL}/thumbnail?title=${title}&type=${type}&description=${description}`
  );
  await page.setViewport({ width: 1280, height: 640 });
  // await page.screenshot({ path: 'example.png' });

  const file = await page.screenshot({ type: 'png' });

  return file;
}
