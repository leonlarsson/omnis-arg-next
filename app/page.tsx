import Link from "next/link";

export default () => {
  return (
    <div>
      <div className="mb-2">
        <Link className="text-3xl underline transition-colors hover:text-bloodhunt-red" href="/stages/part1-62cc0e08-a230-43e0-a7d2-4d1fd14af939">
          Start the ARG
        </Link>
      </div>

      <div>
        <Link className="text-3xl underline transition-colors hover:text-bloodhunt-red" href="/about">
          Read about the ARG
        </Link>
      </div>
    </div>
  );
};
