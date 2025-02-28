// it('my first test_01', ()=>{
//     cy.visit('/');
//     cy.get('[data-cy="first-board"]').type('new board {enter}');

// })

// it('my first test_02', ()=>{
//     cy.visit('/');
//     cy.get('h2').click();
//     cy.wait(3000);
//     cy.get('[data-cy="add-list-input"]').clear();
//     cy.get('[data-cy="add-list-input"]').should('be.visible').type('new list {enter}');
// })

// it('my first test_03', ()=>{
//     cy.visit('/');

//     cy.contains('new board')
//     cy.contains('.board', 'new board')
//     cy.get('.board')
//     cy.get('#board-1')
//     cy.get('[data-cy="board-item"]')
// })

// it('my first test_04', ()=>{
//     cyan.visit('/');
//     cyan.get('[data-cy=board-item]')
//     .first()
//     cyan.get('[data-cy=board-item]')
//     .last()
//     cyan.get('[data-cy=board-item]')
//     .eq(0)
//     cyan.get('[data-cy=board-item]')
//     .ne() //next
//     cyan.get('[data-cy=board-item]')
//     .pre() //previous
//     cyan.get('[data-cy=board-item]')
//     .pare() //parent
//     cyan.get('[data-cy=board-item]')
//     .chi() //children
//     cyan.get('[data-cy=board-item]')
//     .find()
// })

it('interaction', ()=>{
    cy.visit('/board/1');
    cy.wait(3000);
    cy.get('[data-cy="add-list-input"]')
        .type('new list {enter}');
    cy.wait(3000);
    cy.contains('Add another card')
        .click();
    cy.get('[data-cy="new-card-input"]')
        .type('new card {enter}');
})

it.only('new test', ()=>{
    cy.visit('/');
    cy.get('[data-cy="star"]')
        .first()
        .click({force: true});

})