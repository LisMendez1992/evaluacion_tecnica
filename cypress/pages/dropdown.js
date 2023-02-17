class DropdownPage {
    dropdown = {
        slDropdown: () => cy.get("select"),
        selectedDropdown: () => cy.get("select#dropdown option:selected"),
    };

    //Select one of the dropdown values ​​and validate that it has been selected and the text is as expected
    selectValue(value, text) {
        this.dropdown
            .slDropdown()
            .select(value, {
                force: true,
            })
            .then(($value) => {
                cy.log($value);
                expect($value).have.value(value);
                this.dropdown
                    .selectedDropdown()
                    .should("have.value", value)
                    .should("have.text", text);
            });
    }
}

module.exports = new DropdownPage();