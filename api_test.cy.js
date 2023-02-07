describe('Test the home page using an API GET call', () => {

    it.only('check the home page', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.tvo.org/'
        }).as('details')
        
        //Verify the status is 200
        cy.get('@details').its('status')
        .should('eq', 200)

        //Validate the status code in the log
        cy.get('@details').then((response
            ) => {
                cy.log(JSON>stringify (
                    response.body))
            })

    })
    

})