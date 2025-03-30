import { test, expect } from "@playwright/test";

test("should switch to each tool and show it", async ({ page }) => {
	await page.goto("/");

	await expect(
		page.getByRole("region", { name: "Code Analysis Tools" }),
	).toHaveScreenshot("tools-ast.png");

	await page.getByRole("button", { name: "Scope" }).click();
	await page.getByRole("button", { name: "global" }).click();
	// move mouse away to avoid accordion hover state
	await page.mouse.move(0, 0);

	await expect(
		page.getByRole("region", { name: "Code Analysis Tools" }),
	).toHaveScreenshot("tools-scope.png");

	await page.getByRole("button", { name: "Code Path" }).click();

	await expect(
		page.getByRole("region", { name: "Code Analysis Tools" }),
	).toHaveScreenshot("tools-code-path.png");
});
