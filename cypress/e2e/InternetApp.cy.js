describe("Practice Cypress with javascript", () => {

    it("Validate the checkbox functionality", () => {
        cy.visit("https://the-internet.herokuapp.com");
        cy.contains("h2", "Available Examples").should('be.visible');
        cy.get("a[href='/checkboxes']").click();
        cy.url().should('include', '/checkboxes');
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked');
        cy.get("input[type='checkbox']").eq(1).uncheck().should('not.be.checked');
        cy.go('back');
    })


    it("Validated the Dropdoen functionality", () => {
        cy.visit("https://the-internet.herokuapp.com");
        cy.get("a[href='/dropdown']").click();
        cy.url().should('include', '/dropdown');
        cy.get("#dropdown").select("Option 1").should('have.value', '1');
        cy.go('back');
    })
})
