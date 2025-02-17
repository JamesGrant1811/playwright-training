import { Page, Locator } from '@playwright/test';

class HomePage {
page : Page;
navbarPracticeMenu: Locator;
navbarEcommercePracticeButton: Locator;
navbarElemenentPracticeButton: Locator;

constructor (page: Page){
this.page = page;
this.navbarPracticeMenu = page.getByText('PRACTICE', { exact: true });
this.navbarEcommercePracticeButton = page.getByRole('link', { name: 'eCommerce Practice' });
this.navbarElemenentPracticeButton = page.getByRole('link', { name: 'Element Practice' });
}

async clickPracticeMenuButton (){
    await this.navbarPracticeMenu.click();
  }

  async clickEcommercePracticeButton (){
    await this.navbarEcommercePracticeButton.click();
  }

async clickElementPracticeButton (){
    await this.navbarElemenentPracticeButton.click();
}


}
export default HomePage;
