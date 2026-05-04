import type { Page } from '@playwright/test';

export class SignInPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async signInToAdminPage(email?: string, password?: string) {
    const loginEmail = email ?? process.env.LOGIN_EMAIL ?? 'kathyas@nicasource.com';
    const loginPassword = password ?? process.env.LOGIN_PASSWORD ?? 'Kat1901!';

    await this.page.getByLabel('email').fill(loginEmail);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(loginPassword);
    await this.page.getByRole('button', { name: 'Sign in' }).click();
    await this.page.waitForURL(/#\/Dashboard$/);
  }
}
