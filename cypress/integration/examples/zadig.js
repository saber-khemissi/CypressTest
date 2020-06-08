
   
 

    context('Test Seloger', () => {
        require('cypress-xpath')
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            debugger
            return false
        })
        
        Cypress.on('fail', (err) => {
            debugger
        })
        beforeEach(() => {
          cy.visit('https://zadig-et-voltaire.com/eu/fr/')
          
        })
        
        it('Verify the title,filter symbol of Table visible and correctly Shown', () => {  
            cy.title().should('have.text' ,'Site Officiel Zadig&Voltaire - Zadig & Voltaire')
            cy.xpath('//*[@id="viewport"]/div[1]/header/div[2]/div/div[1]/div/div/div/div/div/div/p/strong').should('be.visible')
            cy.xpath('//*[@id="viewport"]/div[1]/header/div[2]/div/div[1]/div/div/div/div/div/div/p/strong').should('have.text','LIVRAISON & RETOUR OFFERT')
           
            })
        
          
      })
      