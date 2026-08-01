// import { Page, expect } from '@playwright/test';

// export class TemplatesPage {

//   constructor(private page: Page) {}

//   async openTemplates() {

//     await this.page.goto('https://app.beta.serri.co.in/template-message');

//     await this.page.waitForLoadState('networkidle');

//     await expect(
//       this.page.getByRole('textbox', { name: 'Search input' })
//     ).toBeVisible();

//   }

//   async verifySearchBoxVisible() {

//     await expect(
//       this.page.getByRole('textbox', { name: 'Search input' })
//     ).toBeVisible();

//   }

//   async searchTemplate(name: string) {

//     await this.page
//       .getByRole('textbox', { name: 'Search input' })
//       .fill(name);

//   }

//   async openTemplate(name: string) {

//     await this.page
//       .getByText(name)
//       .first()
//       .click();

//   }

//   async closeTemplate() {

//     await this.page
//       .getByRole('button', { name: 'Close' })
//       .click();

//   }

// }





import { Page, expect } from '@playwright/test';

export class TemplatesPage {
  constructor(private page: Page) {}

  async openTemplates() {
    await this.page.goto('/template-message');

    await this.page.waitForLoadState('networkidle');

    await expect(
      this.page.getByRole('button', { name: /New Template/i })
    ).toBeVisible();
  }

  async clickNewTemplate() {
    await this.page
      .getByRole('button', { name: /New Template/i })
      .click();
  }

  async selectAccount(account: string) {

    await this.page
      .getByRole('button', { name: /Select Account/i })
      .click();

    await this.page
      .getByText(account)
      .click();
  }

  async selectCategory() {

    await this.page
      .locator('.flex.h-4.w-4.items-center.justify-center.rounded-full.border.transition-all.border-gray-300')
      .first()
      .click();

  }

  async selectMessageType() {

    await this.page
      .getByText('TextImageVideoDocumentLocation')
      .click();

    await this.page
      .locator('.flex.h-4.w-4.items-center.justify-center.rounded-full.border.transition-all')
      .first()
      .click();
  }

  async enterMessage(message: string) {

    await this.page
      .locator('.tiptap')
      .fill(message);

  }

  async enterTemplateName(name: string) {

    await this.page
      .getByRole('textbox', {
        name: /Template name/i
      })
      .fill(name);

  }

  async submitTemplate() {

    await this.page
      .getByRole('button', {
        name: /Submit Template/i
      })
      .click();

  }

  async verifyTemplateCreated() {

    await expect(
      this.page
        .getByRole('button', {
          name: /New Template/i
        })
    ).toBeVisible();

  }

}