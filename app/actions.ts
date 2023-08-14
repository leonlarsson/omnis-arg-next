"use server";

import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";
import { routes } from "./data";

const ratelimit = new Ratelimit({
  redis: kv,
  // rate limit to 5 requests per 10 seconds
  limiter: Ratelimit.slidingWindow(5, "10s"),
  prefix: "omnis-arg"
});

export const checkAnswer = async (path: string, userAnswer: string) => {
  const ip = headers().get("x-forwarded-for");
  const { success, reset } = await ratelimit.limit(`ratelimit_${ip}`);
  if (!success) return { text: `You are going too fast. Try again at ${new Date(reset).toLocaleTimeString()}.` };

  const route = routes.find(route => route.pathname === path);
  if (!route) return { text: "Nothing here." };

  // Handle clues
  if (route.clues?.map(clue => clue.answer).includes(userAnswer.toLowerCase())) {
    return { text: route.clues.find(clue => clue.answer === userAnswer.toLowerCase())!.response };
  }

  // Handle answers
  const answerIsCorrect = route.correctAnswers.includes(userAnswer.toLowerCase());
  return { text: answerIsCorrect ? route.correctResponse.text : route.notCorrectResponses[Math.floor(Math.random() * route.notCorrectResponses.length)], link: answerIsCorrect ? route.correctResponse.link : undefined };
};
