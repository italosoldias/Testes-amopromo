const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     
    baseUrl:'https://homolog1.segurospromo.com.br/site/pesquisa/brasil/2022-07-18/2022-07-23',
    nomeCompleto : 'Marcos antonio dias teofli',
     dataNacimento : '31/03/1998',
     cpf : '49078060000',
     email : 'marcoss200@email.com',
     telefone : '81999570490',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
