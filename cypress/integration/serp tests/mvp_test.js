describe('Init Test', function() {
    it(`'true' === 'true'`, () => {
        expect(true).to.equal(true)
    });
});

describe('Basic interaction with the application', function() {

    it(`Visit vercel deployment and check if submit button contains the text 'Submit`, () => {
        cy.visit('https://serp.vercel.app/')
        cy.url().should('include', 'serp.vercel.app')
        cy.get('.submit-btn').contains('Submit')
    });

    it(`Resizes screen for responsiveness`, function() {
        cy.viewport(1767, 923)
        cy.viewport(480, 650)
    })

    it(`Search for 'animation', 'travel', 'example', for search to be included in URL, and results count to appear`, function() {
        cy.viewport(1767, 923)
        cy.get('.searchbar').type('animation')
        cy.get('.submit-btn').click()
        cy.get('.search-results-count').contains('25')
        cy.url().should('include', 'animation')

        cy.get('.searchbar').type('travel')
        cy.get('.submit-btn').click()
        cy.get('.search-results-count').contains('25')
        cy.url().should('include', 'travel')

        cy.get('.searchbar').type('example')
        cy.get('.submit-btn').click()
        cy.url().should('include', 'example')
        cy.get('.search-results-count').contains('23')
    })

    it(`Checks for results message to not appear and instead 'No results found for <query>' to show up`, () => {
        cy.viewport(1767, 923)
        cy.get('.searchbar').type('waddup')
        cy.get('.submit-btn').click()
        cy.get('.search-results-count').should('not.exist')
        cy.get('.search-results-count-none').contains('waddup')
    })

    it('Checks if data goes back to original list after searching when pressing reset button', () => {
        cy.viewport(1767, 923)
        cy.get('.searchbar').type('example')
        cy.get('.submit-btn').click()

        cy.get('.hamburger-times').click()
        cy.get('.reset-btn').click()
    })
});