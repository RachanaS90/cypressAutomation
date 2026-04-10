class ContactUsPage {
    visit() {
        cy.visit('https://automationexercise.com/contact_us');
    }

    enterName(name) {
        cy.get("input[data-qa='name']").type(name);
    }

    enterEmail(email) {
        cy.get("input[data-qa='email']").type(email);
    }

    enterSubject(subject) {
        cy.get("input[data-qa='subject']").type(subject);
    }

    enterMessage(message) {
        cy.get("#message").type(message);
    }

    attachFile(fileName) {
        cy.get("input[type='file']").attachFile(fileName);
    }

    clickSubmit() {
        cy.get("input[type='submit']").click();
    }

    verifySuccessMessage() {
        cy.contains('div', 'Success! Your details have been submitted successfully.', { timeout: 10000 }).should('be.visible');
    }
}

module.exports = ContactUsPage;