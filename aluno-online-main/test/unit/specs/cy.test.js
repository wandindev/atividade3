describe('Testes do conceito médio CA', () => {

  //Teste para nota superior
  it('retorna conceito SS - Superior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('9.5');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'SS - Superior');
  });
  
  //Teste para nota média superior
  it('retorna conceito MS - Médio Superior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('8.3');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MS - Médio Superior');
  });
  
  //Teste para nota média 
  it('retorna conceito MM - Médio', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('6.3');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MM - Médio');
  });

  //Teste para nota média inferior
  it('retorna conceito MI - Médio Inferior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('2.7');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'MI - Médio Inferior');
  });
  
  //Teste para nota inferior
  it('retorna conceito II - Inferior', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('1.4');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'II - Inferior');
  });
  
  //Teste para nota rendimento
  it('retorna conceito SR - Sem rendimento', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('0.0');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('contain', 'SR - Sem rendimento');
  });
  
  //Teste para nota inválida 
  it('exibe mensagem de erro para nota inválida', () => {
    cy.visit('/notas');
    cy.url().should('eq', 'http://localhost:3000/notas');
    cy.get('#nota-input').type('-2');
    cy.get('#calcular-button').click();
    cy.get('#conceito').should('not.exist');
    cy.get('.error-message').should('exist');
  });
});