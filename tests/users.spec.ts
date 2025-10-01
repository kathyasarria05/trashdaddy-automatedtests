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
});

test('Search for a user in Users page', async ({ page }) => {
    const usersPage = new UsersPage(page);
    await usersPage.searchByUserName('Kathyas');
    await expect(page.getByRole('row').nth(1).getByRole('cell').first()).toHaveText(/Kathya/)
});

test('edit a user', async ({ page }) => {
    const usersPage = new UsersPage(page);
    await usersPage.searchByUserName('Kathya');
    await expect(page.getByRole('row').nth(1).getByRole('cell').first()).toHaveText(/Kathya/)
    const editFormTitle = await usersPage.editFirstUserByName('Kathya');
    await expect(page.getByRole('heading', { level: 6, name: new RegExp(editFormTitle, 'i') })).toBeVisible();
   
});
