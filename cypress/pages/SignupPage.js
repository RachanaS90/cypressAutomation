class SignupPage {
    selectGender(gender) { // 'male' or 'female'
        if (gender === 'female') {
            cy.get("#id_gender2").check();
        } else {
            cy.get("#id_gender1").check();
        }
    }

    enterPassword(password) {
        cy.get("#password").type(password);
    }

    selectDay(day) {
        cy.get("#days").select(day);
    }

    selectMonth(month) {
        cy.get("#months").select(month);
    }

    selectYear(year) {
        cy.get("#years").select(year);
    }

    checkNewsletter() {
        cy.get("#newsletter").check();
    }

    checkOptin() {
        cy.get("#optin").check();
    }

    enterFirstName(firstName) {
        cy.get("input[data-qa='first_name']").type(firstName);
    }

    enterLastName(lastName) {
        cy.get("input[data-qa='last_name']").type(lastName);
    }

    enterCompany(company) {
        cy.get("input[data-qa='company']").type(company);
    }

    enterAddress1(address1) {
        cy.get("input[data-qa='address']").type(address1);
    }

    enterAddress2(address2) {
        cy.get("input[data-qa='address2']").type(address2);
    }

    selectCountry(country) {
        cy.get("select[data-qa='country']").select(country);
    }

    enterState(state) {
        cy.get("input[data-qa='state']").type(state);
    }

    enterCity(city) {
        cy.get("input[data-qa='city']").type(city);
    }

    enterZipcode(zipcode) {
        cy.get("input[data-qa='zipcode']").type(zipcode);
    }

    enterMobileNumber(mobile) {
        cy.get("input[data-qa='mobile_number']").type(mobile);
    }

    clickCreateAccount() {
        cy.get("button[data-qa='create-account']").click();
    }

    verifyAccountCreated() {
        cy.get("h2[class='title text-center']", { timeout: 10000 }).should('have.text', 'Account Created!');
    }
}

module.exports = SignupPage;