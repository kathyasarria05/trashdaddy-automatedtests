import { SignInPage } from "../page-objects/signin-page";
import { Navigation } from "../page-objects/navigation";
import { UsersPage } from "../page-objects/users";
import { test, expect } from '@playwright/test';
import { time } from "console";

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

// TODO: Create a test suite exclusively for navigation and move the below code there

/*test('Navigate to Users', async ({ page }) => {
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToUsers();
    // TODO: agregar expect el url sea /#/Users
});*/

test('Search for a user in Users page', async ({ page }) => {
    
    //search for user
    const usersPage = new UsersPage(page);
    await usersPage.searchByUserName('Carlos');
    await expect(page.getByRole('row').nth(1).getByRole('cell').first()).toHaveText(/Carlos A./)
});

