import { SignInPage } from "../page-objects/signin-page";
import { Navigation } from "../page-objects/navigation";
import { UsersPage } from "../page-objects/users";
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    //Navigate to the URL
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    //Sign In
    const signIn = new SignInPage(page);
    await signIn.signInToAdminPage();
    //navigate to users
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToUsers();
    expect(page).toHaveURL(/#\/Users$/);
});

test('navigate to dashboard page', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToDashboard();
    await expect(page).toHaveURL(/#\/Dashboard$/);
});

test('navigate to orders page', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToOrders();
    await expect(page).toHaveURL(/\/#\/Orders\/?(?:\?.*)?$/);
});

test('navigate to earnings page', async ({ page }) => {
  const navigateTo = new Navigation(page);
  await navigateTo.navigateToCommissions();
  await expect(page).toHaveURL(/\/#\/(?:Commissions|Earnings)$/);
});

test('navigate to payments page', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToPayments();
    await expect(page).toHaveURL(/\/#\/listCommissionPaymentsExtended\/?(?:\?.*)?$/);
});

test('navigate to districts page', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToDistricts();
    await expect(page).toHaveURL(/\/#\/listDistrictsExtended\/?(?:\?.*)?$/);
});   
test('navigate to dump sites page', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToDumpSites();
    await expect(page).toHaveURL(/#\/listDumpsitesExtended$/);
}   );
