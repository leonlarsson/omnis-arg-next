import Link from "next/link";
import Title from "./components/Title";

export default () => {
  return (
    <div>
      <Title content="The Omnis Challenge" />
      <div className="text-3xl">
        Start by going{" "}
        <Link className="underline transition-colors hover:text-bloodhunt-red" href="/stages/part1-62cc0e08-a230-43e0-a7d2-4d1fd14af939">
          here
        </Link>
        .
      </div>
    </div>
  );
};
