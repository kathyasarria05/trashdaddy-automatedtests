import { Page } from 'playwright';

export class Navigation {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigateToDashboard() {
        await this.page.getByRole('menuitem', { name: 'Dashboard' }).click();
        await this.page.waitForURL(/#\/Dashboard$/);
    }

    public async navigateToUsers() {
        await this.page.getByRole('menuitem', { name: 'Users' }).click();
        await this.page.waitForURL(/#\/Users$/)
    }

    public async navigateToOrders() {
        await this.page.getByRole('menuitem', { name: 'Orders' }).click();
        await this.page.waitForURL(/#\/Orders$/);
    }

    public async navigateToCommissions() {
        await this.page.getByRole('menuitem', { name: 'Commissions' }).click();
        await this.page.waitForURL(/#\/Commissions$/);
    }

    public async navigateToPayments() {
        await this.page.getByRole('menuitem', { name: 'Payments' }).click();
        await this.page.waitForURL(/#\/Payments$/);
    }

    public async navigateToDistricts() {
        await this.page.getByRole('menuitem', { name: 'Districts' }).click();
        await this.page.waitForURL(/#\/Districts$/);
    }

    public async navigateToDumpSites() {
        await this.page.getByRole('menuitem', { name: 'Dump Sites' }).click();
        await this.page.waitForURL(/#\/DumpSites$/);
    }

    public async navigateToWaitingList() {
        await this.page.getByRole('menuitem', { name: 'Waiting List' }).click();
        await this.page.waitForURL(/#\/WaitingList$/);
    }
}