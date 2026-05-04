import { test, expect } from '@playwright/test';
import { SignInPage } from '../page-objects/signin-page';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
  });

  test('should sign in and land on dashboard', async ({ page }) => {
    const signInPage = new SignInPage(page);

    await signInPage.signInToAdminPage();

    await expect(page).toHaveURL(/#\/Dashboard$/);
  });
});
