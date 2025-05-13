import IntranetHomepage from "../../../../pages/intranetPages/intranetHomepage";
import dotenv from 'dotenv'
import { test, expect} from '@playwright/test';

dotenv.config();

test.beforeEach(async ({ page }) => {
    await page.goto('https://unosquare.sharepoint.com/sites/Intranet');
})


    // Login and Homepage displays
test('Logs In and Checks the Intranet is displayed', async ({ page }) => {
    const intranetHomepage = new IntranetHomepage(page);
    await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill(process.env.USERNAME || '');
    await page.getByRole('button', { name: 'Next' }).click();
    console.log('Logging in with PASSWORD:', '****'); 
    await page.context().tracing.stop();
    await page.getByLabel('Password').fill(process.env.PASSWORD || '');
    await page.context().tracing.start({ screenshots: true, snapshots: true });
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await expect(page).toHaveTitle(/Intranet - Homepage/);

    // Navigation Test
    await intranetHomepage.myResourcesDropdownMenu();
    await intranetHomepage.myTimeEntriesButtonSelect();

    // Verify it has navigated to MyTimeEntries Page and Logged Hours menu is displayed
    await intranetHomepage.timeEntryProjectDropdownBenchOption();
    await intranetHomepage.timeEntryIssueDropdownSelector('81931 - James Grant COE Activities');
    await expect(intranetHomepage.timeEntryActivityDropdownMeeting).not.toBeHidden();
    await expect(intranetHomepage.timeEntryActivityDropdownMeeting).toBeEnabled();
    await intranetHomepage.timeEntryActivityDropdownMeetingOption();
    await intranetHomepage.timeEntryDateMenuSelector();
    await intranetHomepage.timeEntryHoursSelector();
    await expect(intranetHomepage.timeEntryHoursField).toHaveValue('8');
    await intranetHomepage.timeEntrySummarySectionSelector();
    await expect (intranetHomepage.timeEntrySummarySection).toHaveValue('This is an automated test');
    expect(intranetHomepage.timeEntrySubmitButton).not.toBeHidden;


    })
    