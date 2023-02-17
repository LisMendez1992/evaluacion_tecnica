const dropdownPage = require("../pages/dropdown");


describe('Dropdown Test', () => {
         it('Select value from dropdown checking by value and text', () => {
             cy.visit("/dropdown");
             dropdownPage.selectValue('1', 'Option 1')
             dropdownPage.selectValue('2', 'Option 2')
         });
    
});
