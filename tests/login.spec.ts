import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EMAIL, PASSWORD } from '../utils/constants';

test('User should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.login(
        EMAIL,
        PASSWORD
    );

    await expect(page).toHaveURL(/chatbot/);

});