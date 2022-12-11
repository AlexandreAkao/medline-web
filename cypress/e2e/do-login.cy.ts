/// <reference types="cypress" />

describe('Do Login', () => {
  it('with any user', () => {
    cy.visit('http://localhost:5173/login');
    cy.intercept('POST', '/login').as('login');

    cy.get('#root > div.sc-eCYdqJ.kKlpka > div > div.sc-ftvSup.byVrQV > form > div:nth-child(2) > div > input').type(
      'user@email.com',
    );

    cy.get('#root > div.sc-eCYdqJ.kKlpka > div > div.sc-ftvSup.byVrQV > form > div:nth-child(3) > div > input').type(
      'any_password',
    );

    cy.get(
      '#root > div.sc-eCYdqJ.kKlpka > div > div.sc-ftvSup.byVrQV > form > div.sc-iqcoie.dLlhNV > button:nth-child(1)',
    ).click();
  });
});
