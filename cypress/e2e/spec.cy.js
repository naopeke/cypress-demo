it('my first test_01', ()=>{
    cy.visit('/');
    cy.get('[data-cy="first-board"]').type('new board {enter}');

})

it('my first test_02', ()=>{
    cy.visit('/');
    cy.get('h2').click();
    cy.wait(3000);
    cy.get('[data-cy="add-list-input"]').clear();
    cy.get('[data-cy="add-list-input"]').should('be.visible').type('new list {enter}');
})

it('my first test_03', ()=>{
    cy.visit('/');

    cy.contains('new board')
    cy.contains('.board', 'new board')
    cy.get('.board')
    cy.get('#board-1')
    cy.get('[data-cy="board-item"]')
})

it('my first test_04', ()=>{
    cy.visit('/');
    cy.get('[data-cy=board-item]')
    .first()

    cy.get('[data-cy=board-item]')
    .last()
    
    cy.get('[data-cy=board-item]')
    .eq(0)
    
    cy.get('[data-cy=board-item]')
    .ne() //next
    
    cy.get('[data-cy=board-item]')
    .pre() //previous
    
    cy.get('[data-cy=board-item]')
    .pare() //parent
    
    cy.get('[data-cy=board-item]')
    .chi() //children
    
    cy.get('[data-cy=board-item]')
    .find()
})

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

it('new test', ()=>{
    cy.visit('/');

    cy.get('[data-cy="star"]')
        .first()
        .click({force: true});

})

it('making assertions_01', ()=>{
    cy.visit('/board/1');

    cy.get('[data-cy=new-card]')
        .click();
    
    cy.get('[data-cy="new-card-input"]')
        .type('bread {enter}');
    
    cy.get('[data-cy="card"]')
        .should('be.visible');
    
    cy.get('[data-cy="new-card-input"]')
        .type('milk {enter}');
    
    cy.get('[data-cy="card"]')
        .should('have.length', 2);
})

it('making assertions_02', ()=>{
    cy.visit('/board/1');
    
    cy.get('[data-cy="card-checkbox"]')
        .check();

    cy.get('[data-cy="card-checkbox"]')
        .should('be.checked');
    
    cy.get('[data-cy="due-date"]')
        .should('have.class', 'completed');
})

it('making assertions_03', ()=>{
    cy.visit('/board/1');
    
    cy.get('[data-cy="list-name"]')
        .should('have.value', 'groceries'); // input elementのためhave.textではない
})