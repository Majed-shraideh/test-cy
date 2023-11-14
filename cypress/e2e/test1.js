/// <reference types = "Cypress"/>
describe('Login', () => {
    it.skip('login standard_user', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
    }); 
    it.skip('to add items to the cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        let element = 6 ;
        for (let i = 0; i < element; i= i+2) {
            let myelement = cy.get('.inventory_list').find('.btn').eq(i).click()
            
        }
    });
    it.skip('Assertion For Contact us', () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href='https://automationteststore.com/index.php?rt=content/contact']").click()
        cy.get('#ContactUsFrm_first_name').type("Ahamd")
        cy.get('#ContactUsFrm_email').type("ahmad@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("This is the Test")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
        
    });
    it('', () => {
        cy.visit("https://automationteststore.com/")
        cy.get('.info_links_footer').contains('Shipping').click().then(function(e){
            cy.log("You Add "+ e.text())
            cy.get('.breadcrumb').contains('Home').click()
        })

            

        cy.get('.info_links_footer').contains('Contact Us').click().then(function(e){
                cy.log("You Add "+ e.text())
                cy.get('.breadcrumb').contains('Home').click()
        })

        cy.get('.info_links_footer').contains('Site Map').click().then(function(e){
            cy.log("You Add "+ e.text())
            cy.get('.breadcrumb').contains('Home').click()
    })
        
    });
});