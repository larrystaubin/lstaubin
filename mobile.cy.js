//NOTE: For these tests I'm using the Cypress viewport command
//For more rigorous, end-to-end tests, I would used a tool like Iconic
//NOTE: As noted in the all_docs tests, Cypress cannot locate the Next arrow key

describe('Test the nav menus', () => {
     context('720p resolution', () => {
       beforeEach(() => {
         // responsive test
         // browser with a 720p monitor
         cy.viewport(1280, 720)
         cy.visit('https://www.tvo.org/series-docs');
       })
  
       it('displays full header', () => {
         //Verify the All button is displayed
         cy.contains('All').should('be.visible');
         //Verify the Next arrow key is displayed so user can access the other menu items
        cy.get('.series-docs-nav__nav-button series-docs-nav__next-button').should('be.visible');
       })
     })

     context('iPhone 8 resolution', () => {
         beforeEach(() => {
           // set the viewport to iPhone SE
           // browser with a 720p monitor
           cy.viewport('iphone-8')
           cy.visit('https://www.tvo.org/series-docs');
         })
    
         it('displays Nav All button and Next arrow key', () => {
           //Verify the All button is displayed
           cy.contains('All').should('be.visible');
           //Verify the Next arrow key is displayed so user can access the other menu items
           cy.get('.series-docs-nav__nav-button series-docs-nav__next-button').should('be.visible');
         })
       })

      context('Samsung Note 9 resolution', () => {
        beforeEach(() => {
          // set the viewport to iPhone SE
          // browser with a 720p monitor
          cy.viewport('samsung-note9')
          cy.visit('https://www.tvo.org/series-docs');
        })
    
        it('displays full header', () => {
          //Verify the All button is displayed
          cy.contains('All').should('be.visible');
          //Verify the Next arrow key is displayed so user can access the other menu items
          cy.get('.series-docs-nav__nav-button series-docs-nav__next-button').should('be.visible');
        })
      })
})