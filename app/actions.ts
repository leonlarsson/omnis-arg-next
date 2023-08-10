"use server";

import { routes } from "./data";

export const checkAnswer = async (path: string, userAnswer: string) => {
  const route = routes.find(route => route.pathname === path);
  if (!route) return { answerIsCorrect: false, returnHtml: "Nothing here." };

  // Handle clues
  if (route.clues?.map(clue => clue.answer).includes(userAnswer.toLowerCase())) {
    return { answerIsCorrect: false, returnHtml: route.clues.find(clue => clue.answer === userAnswer.toLowerCase())!.response };
  }

  // Handle answers
  const answerIsCorrect = route.correctAnswers.includes(userAnswer.toLowerCase());
  return { answerIsCorrect, returnHtml: answerIsCorrect ? route.correctResponse : route.notCorrectResponses[Math.floor(Math.random() * route.notCorrectResponses.length)] };
};
