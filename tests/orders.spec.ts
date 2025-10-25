import { SignInPage } from "../page-objects/signin-page";
import { Navigation } from "../page-objects/navigation";
import { UsersPage } from "../page-objects/users";
import { test, expect } from '@playwright/test';
import { OrdersPage } from "../page-objects/orders";

test.beforeEach(async ({ page }) => {
    //Navigate to the URL
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    //Sign In
    const signIn = new SignInPage(page);
    await signIn.signInToAdminPage();
    //navigate to orders
    const navigateTo = new Navigation(page);
    await navigateTo.navigateToOrders();
});

test('Activate filter option in Orders page', async ({ page }) => {

    const ordersPage = new OrdersPage(page);
    await ordersPage.clickOnAddFilter();
})

test('Filter by status', async ({ page }) => {
    const ordersPage = new OrdersPage(page);
    await ordersPage.clickOnAddFilter();
    await ordersPage.selectStatusFilterOption();
    const statusCombo = page.getByRole('combobox', { name: 'Status', exact: true });
    await expect(statusCombo).toBeVisible();

});


test('Select each status from the dropdown and verify', async ({ page }) => {
    const ordersPage = new OrdersPage(page);
    await ordersPage.clickOnAddFilter();
    await ordersPage.selectStatusFilterOption();
    const statusCombo = page.getByRole('combobox', { name: 'Status', exact: true });
    await statusCombo.click();
    const listbox = page.getByRole('listbox');
    await expect(listbox).toBeVisible();
    const options = listbox.getByRole('option');
    await expect(options).toHaveText(['', 'Pending', 'Accepted', 'Cancelled', 'On My Way', 'Arrived', 'Picked Up', 'Dumped',]);;
});


test('Change status to Pending and verify', async ({ page }) => {
  const ordersPage = new OrdersPage(page);
  await ordersPage.clickOnAddFilter();
  await ordersPage.selectStatusFilterOption();
  await ordersPage.changeToStatusPending();

  const emptyState = page.getByText(/No Orders were found with the current filters\./i);
  const rows       = page.locator('tbody tr');

  // 1) Espera a que ocurra uno de los dos escenarios
  await Promise.race([
    emptyState.waitFor({ state: 'visible', timeout: 8000 }),
    rows.first().waitFor({ state: 'visible', timeout: 8000 }),
  ]).catch(() => {});

  // 2) Si no hay filas, valida el empty state y sal
  if (await emptyState.isVisible()) {
    await expect(emptyState).toBeVisible();
    return;
  }

  // 3) Hay filas: espera a que se vaya el "skeleton"
  //    (ajusta el selector si tu skeleton usa otra clase)
  const skeletons = page.locator('[class*="Skeleton"]');
  await expect(skeletons).toHaveCount(0, { timeout: 8000 });

  // 4) Ahora sí, lee y normaliza la columna de Status (ajusta el índice si no es la 2ª)
  const statusCells = page.locator('tbody tr td:nth-of-type(2)');

  // Espera hasta que todas las celdas tengan texto no vacío
  await expect(async () => {
    const texts = (await statusCells.allInnerTexts()).map(t => t.trim());
    expect(texts.length).toBeGreaterThan(0);
    // asegúrate de que ninguna esté vacía
    expect(texts.some(t => t.length === 0)).toBe(false);
  }).toPass({ timeout: 8000 });

  // 5) Verifica que todas digan "Pending"
  const statuses = (await statusCells.allInnerTexts()).map(t => t.trim().toLowerCase());
  expect(new Set(statuses)).toEqual(new Set(['pending']));
});

