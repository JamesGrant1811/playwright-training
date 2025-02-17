import ElementPracticePage from "../../pages/letsKodeItPracticePages/elementPracticePage";
import { test, expect } from '@playwright/test';

test.beforeEach('Checks Practice Title', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
  
      // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Practice Page/);
    })

    // Radio button tests
test('Selects Benz Button Examples', async ({ page }) => {
    const elementPracticepage = new ElementPracticePage(page);

    //Selects Benz Radio button and verifies only Benz option is selected
    await elementPracticepage.benzRadioButtonSelect();
    await expect(elementPracticepage.benzRadioButton).toBeChecked();
    await expect(elementPracticepage.bmwRadioButton).not.toBeChecked();
    await expect(elementPracticepage.hondaRadioButton).not.toBeChecked();

    //Selects the Benz and Honda Checkbox button 
    await elementPracticepage.benzCheckboxButtonSelect();
    await elementPracticepage.hondaCheckboxButtonSelect();
    await expect (elementPracticepage.benzRadioButton).toBeChecked();
    await expect (elementPracticepage.bmwCheckboxButton).not.toBeChecked();
    await expect (elementPracticepage.hondaCheckboxButton).toBeChecked();

    //Selects Benz from the Car Dropdown Menu
    await elementPracticepage.benzCarDropdownOption();
    await expect (elementPracticepage.carDropdown).toHaveValue("benz");
    await expect (elementPracticepage.carDropdown).not.toHaveValue("BMW")
    await expect (elementPracticepage.carDropdown).not.toHaveValue("honda")
}),

  test('Multi Select Example Tests', async ({ page }) => {
    const elementPracticepage = new ElementPracticePage(page);
    //Selects Apple and Peach Options
   /* await elementPracticepage.appleMultiSelector();
    await elementPracticepage.peachMultiSelector();*/
    await elementPracticepage.multiSelectorArray();
    await expect (elementPracticepage.mutiSelectExample).toHaveValues([/apple/, /peach/]);
 })
 
 test('Enabled/Disabled Fields Test', async ({ page }) => {
   const elementPracticepage = new ElementPracticePage(page);
    await elementPracticepage.disableButtonSelect();
    await expect (elementPracticepage.enabledDisabledField).toBeDisabled();
    await elementPracticepage.enableButtonSelect();
    await expect (elementPracticepage.enabledDisabledField).not.toBeDisabled();
    await elementPracticepage.enabledDisabledFieldSelect();
    await expect (elementPracticepage.enabledDisabledField).toBeEditable();

 })
 
test('Displayed Elements Test', async ({ page }) => {
  const elementPracticepage = new ElementPracticePage(page);
    await elementPracticepage.hideElementButtonSelect();
    await expect (elementPracticepage.hideShowExampleField).toBeHidden();
    await elementPracticepage.showElementButtonSelect();
    await expect (elementPracticepage.hideShowExampleField).not.toBeHidden();


 })
 



    
  