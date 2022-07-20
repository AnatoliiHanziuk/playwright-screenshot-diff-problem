import { Locator, expect, LocatorScreenshotOptions } from '@playwright/test';

export class ScreenshotAssertions {
  async matchesScreenshot(locator: Locator, options?: LocatorScreenshotOptions) {
    await expect(locator).toHaveScreenshot({ timeout: 2000, ...options });
  }
}
