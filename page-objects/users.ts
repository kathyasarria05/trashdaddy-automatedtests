import { Page, Locator } from '@playwright/test';

export class UsersPage {
  private searchInput: Locator;

  constructor(private page: Page) {
    this.searchInput = page.getByRole('textbox', { name: 'Search Users' });
  }

  async searchByUserName(name: string) {
    await this.searchInput.fill(name);
    await this.page.keyboard.press('Enter');
  }

}

