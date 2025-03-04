it.only('chaining and retrying', ()=>{
    cy.visit('/');

    // 1st list
    cy.get('[data-cy="first-board"]').type('Shopping list {enter}');
    cy.get('[data-cy="add-list-input"]').should('be.visible').type('groceries {enter}');
    cy.get('[data-cy=new-card]')
    .eq(0)
    .click();

    // add 2 cards to the 1st list
    cy.get('[data-cy="new-card-input"]')
        .type('bread{enter}');
    cy.get('[data-cy="card"]')
        .should('be.visible');
    cy.get('[data-cy="new-card-input"]')
        .type('milk{enter}');
    cy.get('[data-cy="card"]')
        .should('have.length', 2);

    // 2nd list
    cy.get('[data-cy="create-list"]')
        .click();
    cy.get('[data-cy="add-list-input"]')
        .type('drugstore{enter}');
    cy.get('[data-cy="new-card"]')
        .eq(1)
        .click();
    cy.get('[data-cy="new-card-input"]')
        .first()
        .type('ibu{enter}')

    

    cy.contains('[data-cy="card"]', 'Mar 06 2025');
    cy.get('[data-cy="list"]')
        .eq(0)    
        .contains('[data-cy="card"]', 'Mar 06 2025')

    cy.get('[data-cy="card"]')
        .last()
        .click();
})