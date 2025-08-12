import { test, expect } from '@playwright/test';
import { get } from 'http';

test.beforeEach(async ({ page }) => {
  await page.goto('https://dev.d3szz1370molw8.amplifyapp.com/');
});

test.describe('Sign In Page Tests', () => {    

test('Succesful Sign In', async ({ page }) => {

// Fill in the username and password fields.
  await page.getByRole('textbox', { name: 'Email' }).fill('kathyas@nicasource.com')
  await page.getByRole('textbox', { name: 'Password' }).fill('Kat1901!');
  // Click the Sign In button.
  await page.getByRole('button', { name: 'Sign in' }).click(); 
  // Expect the URL to change to the dashboard.
  await expect(page).toHaveURL('https://dev.d3szz1370molw8.amplifyapp.com/#/Dashboard')

});

});
