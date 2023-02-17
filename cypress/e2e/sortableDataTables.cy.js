const sortableDataTables =  require("../pages/sortableDataTables");

describe('Test Sort Table', () => {

    beforeEach(() => {
        cy.visit('/tables')
    })

    it('Sort Table by Due and get value of row two', () => {
        sortableDataTables.sortTable()
        
    });
    
});
