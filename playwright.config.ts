import { defineConfig, devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: "./e2e-tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? [["html"], ["github"]] : "html",

	use: {
		baseURL: "http://127.0.0.1:5173",

		// ensure consistent timezone and locale
		timezoneId: "America/Los_Angeles",
		locale: "en-US",

		// capture trace and video on first retry (retries are only done in CI)
		trace: "on-first-retry",
		video: "on-first-retry",
	},

	expect: {
		toHaveScreenshot: {
			// screenshots are never exactly the same for various reasons - allow a small amount of pixel difference
			maxDiffPixelRatio: 0.05,
		},
	},

	projects: [
		{
			name: "chromium",
			use: {
				...devices["Desktop Chrome"],
				// opt into "New Headless" chromium (https://playwright.dev/docs/browsers#chromium-new-headless-mode, https://developer.chrome.com/docs/chromium/headless)
				channel: "chromium",
			},
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],

	webServer: {
		command: "npm run start",
		url: "http://127.0.0.1:5173",
		reuseExistingServer: !process.env.CI,
	},
});
