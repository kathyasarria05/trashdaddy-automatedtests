
import { SignInPage } from "../page-objects/signin-page";
import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
});

test('Sign in to Admin Page', async ({ page }) => {
    const navigateTo = new SignInPage(page);
    await navigateTo.signInToAdminPage();
    await expect(page).toHaveURL(/#\/Dashboard$/);
});


