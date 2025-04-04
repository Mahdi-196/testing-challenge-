describe('Quiz App E2E', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', { fixture: 'questions.json' }).as('getQuestions');
    cy.visit('/');
  });

  it('starts the quiz and goes through all questions', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.fixture('questions').then((questions) => {
      questions.forEach((q) => {
        cy.contains(q.question).should('exist');

        const correct = q.answers.find(a => a.isCorrect).text;
        cy.contains(correct).should('exist').click();
      });
    });

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
  });
});
