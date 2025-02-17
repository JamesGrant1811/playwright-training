import HomePage from "../../pages/letsKodeItPracticePages/homePage";
import { test, expect } from '@playwright/test';


test.beforeEach('Checks HomePage Title', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Home Page/);

  })

    test('Navigates to Element Practice Page', async({page}) =>{
    const homePage = new HomePage(page);

    //Navigate to Element Practice Page
    await homePage.clickPracticeMenuButton();
    await homePage.clickElementPracticeButton();
});
