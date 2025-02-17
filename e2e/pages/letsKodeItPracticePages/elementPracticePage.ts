import { Page, Locator } from '@playwright/test';

class ElementPracticePage {
    page : Page;
    practicePageTitle: Locator; 
    bmwRadioButton: Locator;
    benzRadioButton: Locator;
    hondaRadioButton: Locator;
    bmwCheckboxButton: Locator;
    benzCheckboxButton: Locator;
    hondaCheckboxButton: Locator;
    carDropdown: Locator;
    mutiSelectExample: Locator;
    disableButton: Locator;
    enableButton: Locator;
    enabledDisabledField: Locator;
    hideElementButton: Locator;
    hideShowExampleField: Locator;
    showElementButton: Locator;

constructor (page: Page){
    this.page = page;
    this.practicePageTitle = page.getByText('Practice Page');
    this.bmwRadioButton = page.locator('#bmwradio')
    this.benzRadioButton = page.locator('#benzradio')
    this.hondaRadioButton = page.locator('#hondaradio')
    this.bmwCheckboxButton = page.locator('#bmwcheck')
    this.benzCheckboxButton = page.locator('#benzcheck')
    this.hondaCheckboxButton = page.locator('#hondacheck')
    this.carDropdown = page.locator('#carselect')
    this.mutiSelectExample = page.locator('#multiple-select-example')
    this.disableButton = page.getByRole('button', { name: 'Disable' })
    this.enableButton = page.getByRole('button', { name: 'Enable' })
    this.enabledDisabledField = page.getByRole('textbox', { name: 'Enabled/Disabled Field' })
    this.hideElementButton = page.getByRole('button', { name: 'Hide' })
    this.showElementButton = page.getByRole('button', { name: 'Show' })
    this.hideShowExampleField = page.getByRole('textbox', { name: 'Hide/Show Example' })
    }
    
    //Radio Button Selections
    async bmwRadioButtonSelect () {
        await this.bmwRadioButton.click();
    }
    async benzRadioButtonSelect (){
        await this.benzRadioButton.click()
    }
    async hondaRadioButtonSelect(){
        await this.hondaRadioButton.click();
    }
    //Checkbox Selections
    async bmwCheckboxButtonSelect(){
        await this.bmwCheckboxButton.click();
    }
    async benzCheckboxButtonSelect(){
        await this.benzCheckboxButton.click();
    }
    async hondaCheckboxButtonSelect(){
        await this.hondaCheckboxButton.click();
    }
    //Car Dropdown Options
    async bmwCarDropdownOption(){
        await this.carDropdown.selectOption('BMW');
    }
    async benzCarDropdownOption(){
        await this.carDropdown.selectOption('Benz');
    }
    async hondaCarDropdownOption(){
        await this.carDropdown.selectOption('Honda');
    }
    //Multi Select Options
    async multiSelectorArray(){
        await this.mutiSelectExample.selectOption(['Apple','Peach']);
    }

    //Enable/Disable Field
    async disableButtonSelect(){
        await this.disableButton.click();
    }
    async enableButtonSelect(){
        await this.enableButton.click();
    }
    async enabledDisabledFieldSelect(){
        await this.enabledDisabledField.fill('This is an enabled field');
    }

    //Element Displayed Example
    async hideElementButtonSelect(){
        await this.hideElementButton.click();
    }
    async showElementButtonSelect(){
        await this.showElementButton.click();
    }
    async hideShowButtonExampleField(){
        await this.hideShowExampleField.click();
    }
    }

export default ElementPracticePage;