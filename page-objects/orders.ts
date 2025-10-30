import { Page } from 'playwright';

export class OrdersPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }   


    public async clickOnAddFilter(){

        const addFilterBtn = this.page.getByRole('button', { name: 'Add filter', exact: true });
        await addFilterBtn.click();
        
    };

    public async selectStatusFilterOption() {
        const statusItem = this.page.getByRole('menu').getByRole('menuitemcheckbox', { name: 'Status' });
        await statusItem.click();
    }

    public async changeToStatusPending() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const pendingOption = this.page.getByRole('option', { name: 'Pending' });
        await pendingOption.click();
    }

    public async changeToStatusAccepted() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const acceptedOption = this.page.getByRole('option', { name: 'Accepted' });
        await acceptedOption.click();
    }   

    public async changeToStatusCancelled() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const cancelledOption = this.page.getByRole('option', { name: 'Cancelled' });
        await cancelledOption.click();
    }   

    public async changeToStatusOnMyWay() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const onMyWayOption = this.page.getByRole('option', { name: 'On My Way' });
        await onMyWayOption.click();
    }   

    public async changeToStatusArrived() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const arrivedOption = this.page.getByRole('option', { name: 'Arrived' });
        await arrivedOption.click();
    }   

    public async changeToStatusPickedUp() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const pickedUpOption = this.page.getByRole('option', { name: 'Picked Up' });
        await pickedUpOption.click();
    }   

    public async changeToStatusDumped() {
        const statusCombo = this.page.getByRole('combobox', { name: 'Status', exact: true });
        await statusCombo.click();
        const dumpedOption = this.page.getByRole('option', { name: 'Dumped' });
        await dumpedOption.click();
    }
}
