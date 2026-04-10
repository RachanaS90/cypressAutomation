class TestCasesPage {
    visit() {
        cy.visit('https://automationexercise.com/test_cases');
    }

    verifyTestCasesTitle() {
        cy.get("h2[class='title text-center']").should('have.text', 'Test Cases');
    }
}

module.exports = TestCasesPage;