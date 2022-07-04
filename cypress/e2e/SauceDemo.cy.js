describe('1st Tests', () => {
  it('validates all available user logins', () => {
    cy.visit('https://www.saucedemo.com')
       
    
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()


        cy.get('[data-test=username]').type('locked_out_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-button').click()
        cy.get('[data-test=username]').clear()

        cy.get('[data-test=username]').type('problem_user')
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

        cy.get('[data-test=username]').type('performance_glitch_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click() 


  })
})
        
        describe('2nd Test', () => {
          it('End to End flow and selects a product, adds it to the cart and proceed to the checkout', () => {

        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('div').contains('Sauce Labs Backpack').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('#shopping_cart_container').click();
        cy.get('[data-test=checkout]').click()
        cy.get('[data-test=firstName]').type('Edgar')
        cy.get('[data-test=lastName]').type('Rodriguez')
        cy.get('[data-test=postalCode]').type('13000')
        cy.get('[data-test=continue]').click()
        cy.get('[data-test=finish]').click()
          })
        }) 
       
 
        describe('3rd Test', () => {
          it('verifies if the Filter Low to Hi is working properly', () => {

        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test=product_sort_container]').select('lohi')

        
        
          })
        }) 



        
 

