describe('Teste de botão', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/TesteCotefacil/page/botao_enviar.html', { timeout: 10000})

  });
  it('Verificar se o botão Enviar está aparecendo na tela', () => {
    cy.contains('button', 'Enviar').should('be.visible');
  });
  
  it('Clica no botão Enviar', () => {
    cy.contains('button', 'Enviar').click();
  });;
});



