function taggedIt(name, tags, fn) {
  const selectedTag = Cypress.env('tag');
  const tagArray = Array.isArray(tags) ? tags : [tags];
   // pass via --env tag="Smoke Test"
   
  if (!selectedTag || tagArray.includes(selectedTag)) {
    it(name, function () {
      cy.allure().tag(...tagArray);
      fn.call(this);
    });
  } else {
    it.skip(name, function () {
      cy.allure().tag(...tagArray);
      fn.call(this);
    });
  }
}

function taggedItOnly(name, tags, fn) {
  const tagArray = Array.isArray(tags) ? tags : [tags];
  it.only(name, function () {
    cy.allure().tag(...tagArray);
    fn.call(this);
  });
}

function taggedItSkip(name, tags, fn) {
  const tagArray = Array.isArray(tags) ? tags : [tags];
  it.skip(name, function () {
    cy.allure().tag(...tagArray);
    fn.call(this);
  });
}

export { taggedIt, taggedItOnly, taggedItSkip };
