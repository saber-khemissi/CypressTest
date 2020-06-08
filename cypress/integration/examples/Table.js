context('Test Seloger', () => {
    require('cypress-xpath')
  
    beforeEach(() => {
      cy.visit('https://www.seleniumeasy.com/test/table-search-filter-demo.html')
    })
    
    it('Verify the title,filter symbol of Table visible and correctly Shown', () => {  
         cy.contains('Click the filter icon to activate column filters inputs').should('be.visible')   
         cy.xpath('/html/body/div[2]/div/div[2]/div[2]/h3').should('have.text', 'Click the filter icon to activate column filters inputs ()')
         cy.xpath(' /html/body/div[2]/div/div[2]/div[2]/h3/small/i').should('be.visible')
        })
    it('Verify the header color of the table is black ', () => {
        
            cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div').should('have.css', 'background-color')
            .and('eq', 'rgb(51, 51, 51)')
        })
    it('Verify the title of header is correctly Shown', () => {  
       
             cy.xpath(' /html/body/div[2]/div/div[2]/div[2]/div/div/h3').should('have.text', 'Listed Users')
       })

      it('Verify the button of Table is visible', () => {  
        
        cy.xpath(' /html/body/div[2]/div/div[2]/div[2]/div/div/div/button').should('be.visible')
        })

    it('Verify the number of rows equal 5', () => {
        
        cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/tbody').find('tr').should('have.length', 5)
        })
    
    it('1-Verify and click on the Filter button       ................................... .   2-Type 1 in the id filed ...................................................................         3-The result of the username searched is Markino.... .............. 4-Verify the username =jacobs should be not visible...', () => {
        
            cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/div/div/button').contains(' Filter').click()
            cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/thead/tr/th[1]/input').type('1');
            cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/tbody/tr[1]/td[2]').should('be.visible')
            cy.xpath('/html/body/div[2]/div/div[2]/div[2]/div/table/tbody/tr[2]/td[2]').should('be.not.be.visible')
            
        }) 
      
  })
  