// import { Page, expect } from '@playwright/test';

// export class LoginPage {

//     constructor(private page: Page) {}

//     async login(email: string, password: string) {

//         await this.page.goto('https://app.beta.serri.co.in/');

//         await this.page
//             .getByRole('textbox', { name: /Enter your Email/i })
//             .fill(email);

//         await this.page
//             .getByRole('button', { name: 'Continue' })
//             .click();

//         await this.page
//             .getByRole('textbox', { name: /Enter Password/i })
//             .fill(password);

//         await this.page
//             .getByRole('button', { name: /Continue with Email/i })
//             .click();

//         // Login complete hone ka wait
//         await this.page.waitForURL('**/chatbot', {
//             timeout: 30000
//         });

//         await expect(
//             this.page.getByPlaceholder('Ask Serri Assistant...')
//         ).toBeVisible();

//     }

// }








import { Page, expect } from '@playwright/test';

export class LoginPage {

  constructor(private page: Page) {}

  async login(email: string, password: string) {

    // Open Login Page
    await this.page.goto('https://app.beta.serri.co.in/');

    // Email
    await this.page
      .getByRole('textbox', {
        name: /Enter your Email/i
      })
      .fill(email);

    await this.page
      .getByRole('button', {
        name: /^Continue$/
      })
      .click();

    // Password
    await expect(
      this.page.getByRole('textbox', {
        name: /Enter Password/i
      })
    ).toBeVisible({
      timeout: 15000
    });

    await this.page
      .getByRole('textbox', {
        name: /Enter Password/i
      })
      .fill(password);

    await this.page
      .getByRole('button', {
        name: /Continue with Email/i
      })
      .click();

    // Wait until dashboard opens
    await this.page.waitForURL('**/chatbot', {
      timeout: 30000
    });

    // Verify login success
    await expect(this.page).toHaveURL(/chatbot/);

    // Wait for dashboard to stabilize
    await this.page.waitForLoadState('networkidle');

  }

}



