context('Test Seloger', () => {
    require('cypress-xpath')
  
    beforeEach(() => {
      cy.visit('https://www.seloger-construire.com/')
      
    })
    
     
    it('Bloc terrain', () => {

            cy.xpath('//*[@id="wrapper"]/div/div/section[1]/div/div[1]/div/div/div[1]').should('have.text', 'Faire estimer ')
            
            cy.xpath('//*[@id="wrapper"]/div/div/section[1]/div/div[1]/div/div').click()
          
            
        }) 
      
  })
  