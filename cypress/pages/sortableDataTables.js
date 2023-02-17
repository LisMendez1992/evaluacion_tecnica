class SortableDataTables {
    tables = {
        tableOne: () => cy.get("#table1"),
    };

    //Validates that the table is visible and searches by text for the column by which it wants to be ordered in descending order    
    sortTableDescending(value) {
        this.tables
            .tableOne()
            .should("be.visible")
            .then(() => {
                cy.contains(value).dblclick();
            });
    }

    //Looks in the table for the value requested by parameters and compares that it is the same one that is sent by parameters
    findValueinRow(rowValue, columValue, textValue) {
        this.tables
            .tableOne()
            .find("tr")
            .eq(rowValue)
            .find("td")
            .eq(columValue)
            .then((value) => {
                expect(value.text()).be.eq(textValue);
            });
    }
}

module.exports = new SortableDataTables();