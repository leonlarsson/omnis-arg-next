"use client";

import { useState } from "react";
import { checkAnswer } from "../actions";

export default ({ route }: { route: string }) => {
  const [isWorking, setIsWorking] = useState(false);
  const [answer, setAnswer] = useState("Awaiting input...");

  return (
    <>
      <form
        className="mx-auto w-full min-w-max max-w-xl"
        onSubmit={async event => {
          const answer = (event.currentTarget.elements.namedItem("answer") as HTMLInputElement).value;
          event.preventDefault();
          setIsWorking(true);
          event.currentTarget.reset();
          const returnData = await checkAnswer(route, answer);
          setAnswer(returnData.returnHtml);
          setIsWorking(false);
        }}
      >
        <input
          className="h-14 w-full rounded border border-bloodhunt-red/40 bg-black/70 p-2 text-xl font-thin outline-none transition-all hover:border-bloodhunt-red focus:border-bloodhunt-red disabled:bg-neutral-500"
          autoFocus
          name="answer"
          required
          maxLength={100}
          disabled={isWorking}
          type="text"
          placeholder="Your answer..."
        />
        <button className="mt-2 w-full rounded bg-bloodhunt-red p-2 text-xl" type="submit">
          Submit
        </button>
      </form>

      <span className="mt-2 text-2xl font-light" dangerouslySetInnerHTML={{ __html: answer }}></span>
    </>
  );
};
