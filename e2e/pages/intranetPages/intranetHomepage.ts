import { Page, Locator } from "@playwright/test"

class intranetHomepage {
    page : Page;
//    homePageUrl: Locator;
//    timeEntriesUrl: Locator;
    navMenuMyResources: Locator;
    navMenuMyTimeEntries: Locator;
    navbarElemenentPracticeButton: Locator;
    myTimeEntriesButton: Locator;
    timeEntriesHeader: Locator;
    loggedHoursWindow: Locator;
    mondayTimeEntry: Locator;
    tuesdayTimeEntry: Locator;
    wednesdayTimeEntry: Locator;
    thursdayTimeEntry: Locator;
    fridayTimeEntry: Locator;
    timeEntryIssueDropdown: Locator;
    timeEntryActivityDropdown: Locator;
    timeEntrySummarySection: Locator;
    timeEntryActivityDropdownMeeting: Locator;
    timeEntryDateMenu: Locator;
    timeEntryHoursField: Locator;
    timeEntrySubmitButton: Locator;
    timeEntryBackButton: Locator;
    bulkEntryButton: Locator;
    addEntryButton: Locator;
    deleteEntryIcon: Locator;
    mondayBulkEntryField: Locator;
    tuesdayBulkEntryField: Locator;
    wednesdayBulkEntryField: Locator;
    thursdayBulkEntryField: Locator;
    fridayBulkEntryField: Locator;
    bulkEntrySummaryField: Locator;

    
    constructor (page: Page){
    this.page = page;
    //Homepage Navigation Menu Locators
    this.timeEntriesHeader = page.getByRole('heading', { name: 'Time Entries' });
    this.navMenuMyResources = page.getByRole('link', { name: 'My Resources' });
    //Time Entries Page Locators
    this.myTimeEntriesButton = page.getByRole('menuitem', { name: 'My Time Entries' });
    this.timeEntriesHeader = page.getByRole('heading', { name: 'Time Entries' });
    this.loggedHoursWindow = page.locator('.flex > div').first();
    //Day Selectors Locators
    this.mondayTimeEntry = page.getByText('03 0 hrsYou need to enter 8');
    this.tuesdayTimeEntry = page.getByText('04 0 hrsYou need to enter 8');
    this.wednesdayTimeEntry = page.getByText('05 0 hrsYou need to enter 8');
    this.thursdayTimeEntry = page.getByText('06 0 hrsYou need to enter 8'); 
    this.fridayTimeEntry = page.getByText('07 0 hrsYou need to enter 8');
    
    // Add Time Entry Window fields
    this.timeEntryIssueDropdown = page.locator('.css-qbdosj-Input').first();
    this.timeEntryActivityDropdown = page.locator('div:nth-child(5) > .css-5rcvev-control');
   // this.timeEntryActivityDropdown = page.locator('.css-13rjlh4-placeholder', { hasText: 'Select...' });;
   // this.timeEntryActivityDropdown = page.locator('*').allInnerTexts();
    this.timeEntryActivityDropdownMeeting = page.locator('text=Meeting');
    this.timeEntryDateMenu = page.locator('input[name="applicableDate"]');
    this.timeEntryHoursField = page.getByRole('spinbutton');
    this.timeEntrySummarySection = page.locator('textarea[name="comments"]');
    this.timeEntrySubmitButton = page.getByRole('button', { name: 'Submit' });
    this.timeEntryBackButton = page.locator('div').filter({ hasText: /^February 03 2025Onovative - Core IQ$/ }).locator('path');
    //Bulk Entry Window Fields 
    this.bulkEntryButton = page.getByRole('button', { name: 'Bulk Entry' });
    this.addEntryButton = page.getByRole('button', { name: 'Add Entry' });
    this.deleteEntryIcon = page.getByRole('row').filter({ hasText: /^$/ }).locator('svg');
    this.bulkEntrySummaryField = page.getByRole('textbox');
    this.mondayBulkEntryField =  page.locator('input[name="entries\\.0\\.hours\\.2\\.numberOfHours"]');
    this.tuesdayBulkEntryField =  page.locator('input[name="entries\\.0\\.hours\\.3\\.numberOfHours"]');
    this.wednesdayBulkEntryField =  page.locator('input[name="entries\\.0\\.hours\\.4\\.numberOfHours"]');
    this.thursdayBulkEntryField =  page.locator('input[name="entries\\.0\\.hours\\.5\\.numberOfHours"]');
    this.fridayBulkEntryField =  page.locator('input[name="entries\\.0\\.hours\\.6\\.numberOfHours"]');
    }

    //Homepage Navigation Menu
    async myResourcesDropdownMenu (){
        await this.navMenuMyResources.hover();
      }
    async myTimeEntriesButtonSelect (){
        await this.myTimeEntriesButton.click();
      }

    //Time Entries Page
    async timeEntriesHeaderVerify (){
         this.timeEntriesHeader;
      }
    async loggedHoursWindowVerify (){
        this.loggedHoursWindow;
     }
    //Day Selectors
     async mondayTimeEntrySelector (){
        this.mondayTimeEntry.click();
     }
     async tuesdayTimeEntrySelector (){
        this.tuesdayTimeEntry.click();
     }
     async wednesdayTimeEntrySelector (){
        this.wednesdayTimeEntry.click();
     }
     async thursdayTimeEntrySelector (){
        this.thursdayTimeEntry.click();
     }
     async fridayTimeEntrySelector (){
        this.fridayTimeEntry.click();
     }

    // Add Time Entry Window fields
    async timeEntryIssueDropdownSelector (){
        this.timeEntryIssueDropdown.click();
     }
     async timeEntryActivityDropdownSelector (){
      console.log(this.timeEntryActivityDropdown);
        this.timeEntryActivityDropdown.click();
     }
     async timeEntryActivityDropdownMeetingOption (){
         this.timeEntryActivityDropdown.click();
         this.timeEntryActivityDropdown.hover();
         this.timeEntryActivityDropdownMeeting.click({ force: true });
    }
    async timeEntryDateMenuSelector (){
       this.timeEntryDateMenu.fill('2025-02-03');
     }
     async timeEntryHoursSelector (){
        this.timeEntryHoursField.click();
        this.timeEntryHoursField.fill('8');
      }
     async timeEntrySummarySectionSelector (){
        this.timeEntrySummarySection.click();
        this.timeEntrySummarySection.fill('This is an automated test');
     }
     async timeEntrySubmitButtonVisible (){
        this.timeEntrySubmitButton.hover();
     }
     async timeEntryBackButtonSelector (){
        this.timeEntryBackButton.click();
     }
    //Bulk Entry Window Fields
    async bulkEntryButtonSelector (){
        this.bulkEntryButton.click();
     }
     async addEntryButtonSelector (){
        this.addEntryButton.click();
     }
      async bulkEntrySummaryFieldSelector (){
        this.bulkEntrySummaryField.fill('This is an automated test');
     }
     async mondayBulkEntryFieldSelector (){
        this.mondayBulkEntryField.fill('8');
     }


     
    }

    export default intranetHomepage;