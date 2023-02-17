// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginByApi", (username, password, status) => {
    cy.visit("/login");
    cy.request({
        method: "POST",
        url: "/authenticate",
        form: true,
        body: {
            username: username,
            password: password,
        },
    }).then(($response) => {
        expect($response.status).to.eq(status);
         
        })
    
});

Cypress.Commands.add("loginByUI", (username, password) => {
    cy.visit("/login");
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get(":button").click();
});