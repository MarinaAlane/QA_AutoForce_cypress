describe('Header site WhatsApp button in the header should display a liste', () => {
  it('WhatsApp button in the header should display a list', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.header__phones-container').contains('WhatsApp').click();
    cy.get('#header-card-whatsapp').should('exist').click();
    cy.get('.list').children();
  })

  it('Telephones button in the header should display a list', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.header__phones-container').contains('Telefones').click();
    cy.get('#header-card-phones').should('exist').click();
    cy.get('.list').children();
  })
})

describe('Footer site', () => {
  it('The website footer should contain unit information, and there may be multiple units.', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.footer-land-units').should('exist')
    cy.get('.nav-vertical__item').children().first().click()
    cy.get('address').should('exist').should('not.have.length', 0)
    cy.get('.text-mask-phone').should('exist')
    cy.get('.footer-land-units__title').contains('Horários de Funcionamento:')
    cy.get('.nav-vertical__item').should('have.length.greaterThan', 0).and('be.visible');
  })

  it('The website footer should contain information about the parent company.', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.footer-land__info').children().contains('Endereço Matriz:')
    cy.get('.footer-land__info-item').contains('Razão Social:').and('be.visible')
    cy.get('.footer-land__info-item').contains('CNPJ').and('be.visible')
  })
})

describe('Carroussel home page', () => {
  it('Desktop carousel should contain photos and videos.', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.showcase-slide-main').should('exist').and('be.visible')
    cy.get('.swiper-slide--video-slide').should('exist')
    cy.get('.swiper-slide-active').scrollIntoView().should('be.visible');
  })
})

describe('Cards home page', () => {
  it('The homepage should have cards with vehicle information and a "SAIBA MAIS" button.', () => {
    cy.visit('https://testes.autoforce.com.br/dealer-bmw-desafio/');

    cy.get('.list-vehicles-land__title').should('have.length.greaterThan', 0).and('be.visible')
    cy.get('.list-vehicles-land__items').should('exist').and('be.visible')
    cy.get('.card-land').children('img')
    cy.get('.card-land__title').should('exist').and('be.visible')
    cy.get('.list-vehicles-land__item').children('button', 'SAIBA MAIS')
  })
})