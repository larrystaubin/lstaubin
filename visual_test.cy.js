//There were major configuration changes between Cypress 9 and 10
//I noticed that the open source visual testing tools did not work with Cypress 10
//I decided to go with AppliTools to do the visual testing as they guidance on how it works with Cypress 10


describe ('TVO visual test', () => {

    beforeEach(() => {
        cy.eyesOpen({
            appName: 'TVO',
            testName: Cypress.currentTest.homepage,
        })
    })

    it('should check that the home page loads', () => {
        cy.visit('https://tvo.org')

        //verify the home page loads
        cy.eyesCheckWindow({
            tag: 'Home page',
            target: 'window',
            fully: true
        })

          afterEach(() => {
        
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })


    })
})
