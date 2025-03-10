import { Page, Locator } from "@playwright/test"

class intranetHomepage {
    page : Page;

    
    constructor (page: Page){
    this.page = page;
   // this.myTimeEntriesTitle = page.getByRole('link', { name: 'My Resources' });

    }
    
    async myResourcesDropdownMenu (){
 //       await this.navMenuMyResources.hover();
      }

    }

    export default intranetHomepage;