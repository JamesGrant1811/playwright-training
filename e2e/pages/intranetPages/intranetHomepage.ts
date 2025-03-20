import { Page, Locator } from "@playwright/test"

class intranetHomepage {
    page : Page;
    navbarMenuMyResourcesOption: Locator;
    navbarMenuMyTimeEntriesOption: Locator;
    myTimeEntriesButton: Locator;
    timeEntriesHeader: Locator;
    loggedHoursModel: Locator;
    timeEntryProjectDropdown: Locator;
    timeEntryProjectBenchOption: Locator;
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
    dayTimeEntry: any;


    constructor (page: Page){
    this.page = page;
    //Homepage Navigation Menu Locators
    this.timeEntriesHeader = page.getByRole('heading', { name: 'Time Entries' });
    this.navbarMenuMyResourcesOption = page.getByRole('link', { name: 'My Resources' });
    //Time Entries Page Locators
    this.myTimeEntriesButton = page.getByRole('menuitem', { name: 'My Time Entries' });
    this.timeEntriesHeader = page.getByRole('heading', { name: 'Time Entries' });
    this.loggedHoursModel = page.locator('.flex > div').first();
    // Add Time Entry Window fields
    this.timeEntryProjectDropdown = page.locator('.css-qbdosj-Input').first();
    this.timeEntryProjectBenchOption = page.getByText('Unosquare - Bench', { exact: true });
    this.timeEntryIssueDropdown = page.locator('div:nth-child(8) > .css-5rcvev-control > .css-vc0zja-ValueContainer');
    this.timeEntryActivityDropdown = page.locator('div:nth-child(5) > .css-5rcvev-control');
    this.timeEntryActivityDropdownMeeting = page.locator('text=Meeting');
    this.timeEntryDateMenu = page.locator('input[name="applicableDate"]');
    this.timeEntryHoursField = page.getByRole('spinbutton');
    this.timeEntrySummarySection = page.locator('textarea[name="comments"]');
    this.timeEntrySubmitButton = page.getByRole('button', { name: 'Submit' });
   }

    //Homepage Navigation Menu
    async myResourcesDropdownMenu (){
        await this.navbarMenuMyResourcesOption.hover();
      }
    async myTimeEntriesButtonSelect (){
        await this.myTimeEntriesButton.click();
      }

    //Time Entries Page
    async timeEntriesHeaderVerify (){
         this.timeEntriesHeader;
      }
    async loggedHoursWindowVerify (){
        this.loggedHoursModel;
     }
    //Day Selectors
     async selectTimeEntry (dayTimeEntry){
      this.dayTimeEntry.click();
      }
      
    // Add Time Entry Window fields
      async timeEntryProjectDropdownBenchOption (){
         this.timeEntryProjectDropdown.click();
         this.timeEntryProjectDropdown.hover();
         this.timeEntryProjectBenchOption.click({ force: true });
      }

     async timeEntryIssueDropdownSelector (timeEntryIssueText){
      this.timeEntryIssueDropdown.click();
      this.timeEntryIssueDropdown.hover();
      this.timeEntryIssueDropdown.fill(timeEntryIssueText);
      this.timeEntryIssueDropdown.getByText(timeEntryIssueText, { exact: true }).click({ force: true });
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