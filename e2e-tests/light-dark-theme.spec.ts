import { test, expect } from "@playwright/test";

test("should show light theme by default and switch to dark theme", async ({
	page,
}) => {
	await page.goto("/");

	await expect(page).toHaveScreenshot("light-theme.png");

	await page.getByRole("button", { name: "Toggle theme" }).click();
	await page.getByRole("menuitem", { name: "Dark" }).click();

	await expect(page).toHaveScreenshot("dark-theme.png");
});
