// import { test } from '@playwright/test';

// import { LoginPage } from '../pages/LoginPage';
// import { TemplatesPage } from '../pages/TemplatesPage';

// import { EMAIL, PASSWORD } from '../utils/constants';

// test('Search and Open Template', async ({ page }) => {

//     const loginPage = new LoginPage(page);
//     const templatesPage = new TemplatesPage(page);

//     await loginPage.login(EMAIL, PASSWORD);

//     await templatesPage.openTemplates();

//     await templatesPage.verifySearchBoxVisible();

//     await templatesPage.searchTemplate('shahbaz');

//     await templatesPage.openTemplate('shahbaz_template_1');

//     await templatesPage.closeTemplate();

// });





import { test, expect } from '@playwright/test';

test('Create Template', async ({ page }) => {

  const templateName = `vedant_test_${Date.now()}`;

  // Login
  await page.goto('https://app.beta.serri.co.in/');

  await page
    .getByRole('textbox', { name: /Enter your Email/i })
    .fill('tech+testing@serri.club');

  await page
    .getByRole('button', { name: 'Continue' })
    .click();

  await page
    .getByRole('textbox', { name: /Enter Password/i })
    .fill('Qa_testing@2026');

  await page
    .getByRole('button', { name: /Continue with Email/i })
    .click();

  await page.waitForURL('**/chatbot');

  // Direct open Templates page (sidebar click nahi karna)
  await page.goto('https://app.beta.serri.co.in/template-message');

  await page.waitForLoadState('networkidle');

  await expect(
    page.getByRole('button', { name: /New Template/i })
  ).toBeVisible();

  // New Template
  await page
    .getByRole('button', { name: /New Template/i })
    .click();

  // Template Name
  await page
    .getByRole('textbox', { name: /Template name/i })
    .fill(templateName);

  // Select Account
  await page
    .getByRole('button', { name: /Select Account/i })
    .click();

  await page
    .getByText('rohitsmock test account')
    .click();

  // Message Body
  await page
    .locator('.tiptap')
    .click();

  await page
    .locator('.tiptap')
    .fill('intern');

  // Submit
  await page
    .getByRole('button', { name: /Submit Template/i })
    .click();

  // Verify page is still open
  await expect(page).toHaveURL(/template-message/);

});