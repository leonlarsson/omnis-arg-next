"use client";

import { useState } from "react";
import { checkAnswer } from "../actions";

export default ({ route }: { route: string }) => {
  const [isWorking, setIsWorking] = useState(false);
  const [answer, setAnswer] = useState("");
  const [submitButtonText, setSubmitButtonText] = useState("Submit");
  const [response, setResponse] = useState("Awaiting input...");

  const handleCooldown = () => {
    let secondsLeft = 4;
    setSubmitButtonText(`Please wait ${secondsLeft}s...`);

    const interval = setInterval(() => {
      secondsLeft--;
      setSubmitButtonText(`Please wait ${secondsLeft}s...`);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setIsWorking(false);
      setSubmitButtonText("Submit");
    }, 4000);
  };

  return (
    <>
      <form
        className="mx-auto w-full min-w-max max-w-xl"
        onSubmit={async event => {
          event.currentTarget.reset();
          event.preventDefault();
          setIsWorking(true);
          const returnData = await checkAnswer(route, answer);
          setResponse(returnData.returnHtml);
          handleCooldown();
        }}
      >
        <input
          className="h-14 w-full rounded border-2 border-bloodhunt-red/40 bg-black/70 p-2 text-xl font-thin outline-none transition-all hover:border-bloodhunt-red focus:border-bloodhunt-red disabled:cursor-not-allowed disabled:bg-neutral-700"
          autoFocus
          name="answer"
          required
          maxLength={100}
          disabled={isWorking}
          value={answer}
          onChange={event => setAnswer(event.currentTarget.value)}
          type="text"
          placeholder="Your answer..."
        />
        <button className="mt-2 w-full rounded border-2 border-bloodhunt-red/40 bg-transparent p-2 text-xl transition-all hover:bg-bloodhunt-red active:translate-y-[2px] disabled:cursor-not-allowed disabled:bg-neutral-700" disabled={isWorking || !answer.length} type="submit">
          {submitButtonText}
        </button>
      </form>

      <span className="mt-2 text-2xl font-light" dangerouslySetInnerHTML={{ __html: response }}></span>
    </>
  );
};
