import { test } from '@playwright/test';
import { ScreenshotAssertions } from '../assertions/screenshotAssertion';

// Features of Playwright extension - https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
test.describe('I', () => {
  test.describe('can see correctly rendered @vis-reg', () => {
    let screenshotAssertions = new ScreenshotAssertions();

    test.beforeEach(({ page }) => {
      page.setViewportSize({
        width: 1920,
        height: 1080,
      });
    });

    test('playwright home page title', async ({ page }) => {
        await page.goto('/');
        // const homePageTitleEl = page.locator('.hero__title');
        const homePageTitleEl = page.locator('.hero--primary');
        await screenshotAssertions.matchesScreenshot(homePageTitleEl);
    });
  });
});