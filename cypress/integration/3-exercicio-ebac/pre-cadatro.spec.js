/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')        
    });

    it('Deve completar o pré cadatro com sucesso', () =>{
        let emailFake = faker.internet.email();
        let firstNameFake = faker.name.firstName();
        let lastNameFake = faker.name.lastName();

        cy.get('#reg_email').type(emailFake)
        cy.get('#reg_password').type('teste@teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstNameFake)
        cy.get('#account_last_name').type(lastNameFake)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});
