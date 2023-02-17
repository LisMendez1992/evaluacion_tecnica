class SortableDataTables {
    tables = {
        tableOne: () => cy.get('#table1')
    }

    sortTable(){
        this.tables.tableOne().should('be.visible').then(() =>{
            cy.contains('Due').click()
            
        })
    }


}

module.exports = new SortableDataTables();
