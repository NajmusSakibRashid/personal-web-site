import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const width = parseInt(searchParams.get("width") || "1280");
    const height = parseInt(searchParams.get("height") || "800");

    if (!url) {
        return NextResponse.json(
            { error: "URL parameter is required" },
            { status: 400 }
        );
    }

    try {
        // Launch browser with stealth settings
        const browser = await puppeteer.launch({
            headless: "new",
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-blink-features=AutomationControlled",
                "--disable-features=IsolateOrigins,site-per-process",
                "--window-size=1920,1080",
                "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            ],
            ignoreDefaultArgs: ["--enable-automation"],
        });

        const page = await browser.newPage();

        // Set various properties to make puppeteer harder to detect
        await page.evaluateOnNewDocument(() => {
            // Override the navigator.webdriver property
            Object.defineProperty(navigator, "webdriver", {
                get: () => false,
            });

            // Override the navigator.languages property
            Object.defineProperty(navigator, "languages", {
                get: () => ["en-US", "en", "es"],
            });

            // Override the plugins array
            Object.defineProperty(navigator, "plugins", {
                get: () => {
                    return [1, 2, 3, 4, 5].map(() => ({
                        name: `Chrome PDF Plugin`,
                        description: "Portable Document Format",
                        filename: "internal-pdf-viewer",
                        length: 1,
                        item: () => null,
                    }));
                },
            });

            // Remove webdriver-related properties
            delete window.chrome;

            // Add fake chrome runtime
            window.chrome = {
                runtime: {},
            };

            // Pass webdriver checks
            window.navigator.chrome = { runtime: {} };
        });

        // Set common headers
        await page.setExtraHTTPHeaders({
            "Accept-Language": "en-US,en;q=0.9",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
            Referer: "https://www.google.com/",
        });

        await page.setViewport({
            width,
            height,
            deviceScaleFactor: 1,
            hasTouch: false,
            isLandscape: true,
            isMobile: false,
        });

        // Simulate human-like behavior
        await page.goto(url, {
            waitUntil: "networkidle2",
            timeout: 15000,
        });

        // Add random mouse movements and scrolling to mimic human behavior
        await page.mouse.move(
            50 + Math.random() * 200,
            40 + Math.random() * 100
        );
        await page.waitForTimeout(100 + Math.random() * 300);
        await page.mouse.move(
            150 + Math.random() * 300,
            140 + Math.random() * 200
        );

        // Random scrolling
        await page.evaluate(() => {
            window.scrollTo({
                top: 100 + Math.random() * 400,
                behavior: "smooth",
            });
        });

        await page.waitForTimeout(300 + Math.random() * 500);

        // Take screenshot
        const screenshot = await page.screenshot({
            type: "jpeg",
            quality: 90,
        });

        await browser.close();

        // Return the image with randomized cache-control to appear less bot-like
        const cacheTime = 3600 + Math.floor(Math.random() * 1200);
        return new NextResponse(screenshot, {
            headers: {
                "Content-Type": "image/jpeg",
                "Cache-Control": `public, max-age=${cacheTime}`,
                "X-Frame-Options": "DENY",
                "X-Content-Type-Options": "nosniff",
            },
        });
    } catch (error) {
        console.error("Error generating preview:", error);
        return NextResponse.json(
            { error: "Failed to generate preview" },
            { status: 500 }
        );
    }
}
