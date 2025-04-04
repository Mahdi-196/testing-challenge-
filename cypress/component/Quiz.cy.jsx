import { mount } from 'cypress/react';
import Quiz from "../../client/src/components/Quiz";
import questions from '../fixtures/questions.json';

describe('Quiz Component', () => {
  beforeEach(() => {
    // Intercept API call made by Quiz component
    cy.intercept('GET', '/api/questions/random', { body: questions }).as('getQuestions');
    mount(<Quiz />);
  });

  it('renders start button', () => {
    cy.contains('Start Quiz').should('exist');
  });

  it('starts quiz and shows first question and answers', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains(questions[0].question).should('exist');
    questions[0].answers.forEach((answer) => {
      cy.contains(answer.text).should('exist');
    });
  });

  it('moves to next question after selecting an answer', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Click first answer
    cy.contains(questions[0].answers[0].text).click();

    // Check next question appears
    cy.contains(questions[1].question).should('exist');
  });

  it('shows final score at the end', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Go through all questions
    questions.forEach((q) => {
      cy.contains(q.answers[0].text).click();
    });

    cy.contains('Quiz Completed').should('exist');
    cy.contains(`Your score:`).should('exist');
  });
});
