describe('Validação do cupom de desconto AMOPROMO', () => {
    it('passes', () => {
     
      
      cy.visit('/')
      
     
  
      Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
      })

       cy.get(':nth-child(3) > .box-plans > .box-footer-plans > .box-plans-container > :nth-child(2) > .box-plans-row > .select-button').click()
       cy.get('#cupom').focus().type('AMOPROMO')
       cy.get('.cupom-desconto > button').focus().click()
       cy.contains('Erro: Cupom Inválido ou expirado')
     
    })
  })