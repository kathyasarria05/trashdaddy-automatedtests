import { Page } from 'playwright';

export class SignInPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async signInToAdminPage() {
        await this.page.getByLabel('email').fill('kathyas@nicasource.com');
        await this.page.getByRole('textbox', { name: 'Password' }).fill('Kat1901!');
        await this.page.getByRole('button', { name: 'Sign in' }).click();
        await this.page.waitForURL(/#\/Dashboard$/);

    }

    
}