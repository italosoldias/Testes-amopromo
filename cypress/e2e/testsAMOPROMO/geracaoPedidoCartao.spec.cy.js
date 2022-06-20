describe('Geração de pedido com cartão de credito', () => {
    it('passes', () => {
      const nome = Cypress.config("nomeCompleto")
      const data = Cypress.config("dataNacimento")
      const identificadoor = Cypress.config("cpf")
      const emailValido = Cypress.config("email")
      const telefoneValido = Cypress.config("telefone")
      
      cy.visit('/')
      
      Cypress.on('uncaught:exception', (err, runnable) => {
       
        return false
      })
      
      cy.get(':nth-child(4) > .box-plans > .box-footer-plans > .box-plans-container > :nth-child(2) > .box-plans-row > .select-button').click()
      cy.get('.row-segurados > :nth-child(1) > input').focus().type(nome)
      cy.get('.row-segurados > :nth-child(2) > input').focus().type(data)
      cy.get('.row-segurados > :nth-child(3) > input').focus().type(identificadoor)
      cy.get('#cartao-credito').click()
      cy.get('#card2').click()
      cy.get('.label-form').click()
      cy.get('#cc-number').focus().type(5173888231895937)
      cy.get('#cc-holder-name').focus().type(nome)
      cy.get('#cc-holder-cpf').focus().type(identificadoor)
      cy.get('#cc-expiry-month').select(10)
      cy.get('#cc-expiry-year').select("2023")
      cy.get('#cc-verfication-code').focus().type("802")
      cy.get('.gcontato > input').focus().type(nome)
      cy.get('.desktop').focus().type(emailValido)
      cy.get('.g-telefone > input').focus().type(telefoneValido)
      cy.get('.gcep > input').focus().type(69902464)
      cy.get('.gendereco > input').focus().type('Travessa Estrelado')
      cy.get('.gnumero > input').focus().type(555)
      cy.get('.gbairro > input').focus().type('Bahiaq Nova')
      cy.get('.gcdade > input').focus().type('Rio Branpc')
      cy.get('.selectstate').select('Acre')
      cy.get('.finish-payment').click()
      cy.wait(109000)
      cy.contains('Pedido recebido com sucesso!')
      
    })
  })