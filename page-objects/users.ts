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

  async editFirstUserByName(name: string) {
    await this.page.getByRole('link', { name: /^Edit$/ }).first().click();
    return `^Edit\\s+"${name}"$`;
  }

  async deleteUser() {
     await this.page.getByRole('button', { name: 'Delete' }).click();;
  }

}