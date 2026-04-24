describe("End to End test", () => {

    let testdata;

    before(() => {
        cy.fixture('credentials').then((data) => {
            testdata = data;
        })
    })

    it("test login and add to card functionality", function () {
        const succssmsg = "Thank you for your order!";

        cy.visit("https://www.saucedemo.com/");
        cy.get("#user-name").type(testdata.username);
        cy.get("#password").type(testdata.password);
        cy.get("#login-button").click();

        cy.get(".inventory_item_description").each(function ($el, index) {
            const prodname = $el.find(".inventory_item_name ").text().trim();
            console.log(prodname);
            if (testdata.productname === prodname) {
                expect(prodname).to.equal(testdata.productname);
                cy.wrap($el).find("button").click();
            }
        })

        cy.get(".shopping_cart_link").click();

        cy.get(".inventory_item_name").then(function ($el) {
            const cartprodname = $el.text().trim();
            expect(cartprodname).to.equal(testdata.productname);
        })


        cy.contains("Checkout").click();
        cy.get("#first-name").type('Rachana');
        cy.get("#last-name").type('Sinha');
        cy.get("#postal-code").type('411057');

        cy.get("#continue").click();

        cy.get(".inventory_item_name").then(function ($el) {
            const prodoverview = $el.text().trim();
            expect(prodoverview).to.equal(testdata.productname);
        })

        cy.contains("Finish").click();

        cy.get(".complete-header").then(($el) => {
            const msg = $el.text();
            expect(msg).to.equal(succssmsg);
        })

    })

})