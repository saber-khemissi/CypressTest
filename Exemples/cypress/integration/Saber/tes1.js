describe('MyTestSuite', function() 
{
    it('Verify Title of the page', function()  
    {
      cy.visit('https://example.cypress.io')
      cy.title().should('eq','nopcommerce demo store')
    })
  })