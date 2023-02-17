describe("Login Test for the-internet.herokuapp", () => {
    before(() => {
        cy.fixture("dataLogin").then((data) => {
            cy.wrap(data.username).as("username");
            cy.wrap(data.password).as("password");
            cy.wrap(data.wrongUsername).as("wrongUsername");
            cy.wrap(data.wrongPassaword).as("wrongpassaword");
        });
    });

    it("Login with API OK - Status 200", function () {
        cy.loginByApi(this.username, this.password, 200);
        cy.visit("/secure");
        cy.contains("Secure Area").should("be.visible");
    });

    it("Login with UI OK", function () {
        cy.loginByUI(this.username, this.password);
        cy.contains("Secure Area").should("be.visible");
    });

    it("Logout with UI OK", function () {
        cy.loginByUI(this.username, this.password);
        cy.contains("Logout").click();
        cy.contains("You logged out of the secure area!").should("be.visible");
    });

    it("Login with wrong username", function() {
        cy.loginByUI(this.wrongUsername, this.password);
        cy.contains("Your username is invalid!").should("be.visible");
    });

    it("Login with wrong password", function () {
        cy.loginByUI(this.username, this.wrongpassaword);
        cy.contains("Your password is invalid!").should("be.visible");
    });
});