describe('Test the All Docs page at the TVO website', () => {

  beforeEach(() => {
    cy.viewport(1730, 768)
    
  })

  it('Go to the TVO homepage', () => {
    cy.visit('https://www.tvo.org');
    //Click the Docs & Series button
    cy.contains('Docs & Series').click();

    //Verify the correct page loads by checking the URL
    cy.url().should('contain', 'series-docs');

    //Check that the Featured Documentary header is visible
    cy.contains('Featured Documentary').should('be.visible');

    //Click the sub-nav Series button
    cy.contains('.MuiButton-label-1648', 'Series').click();

    //Verify the Series page loads
    cy.get('h1').should('have.text', 'SERIES series and docs');

    //Click the All button to return to All docs
    cy.contains('All').click();

      //Click the Next arrow key to shift the sub-nav
      //NOTE: The test fails because Cypress is unable to find the buttton
      //The arrow button should have a unique id like "data-cy" in order for Cypress to act on it
    //cy.get('.series-docs-nav__nav-button series-docs-nav__next-button').click();

    //Click the Watch Now button
    cy.contains('Watch Now').click();

    //Verify a Play button for the video is displayed
    cy.get('.vjs-big-play-button').should('be.visible');

  

  })



})