export default ({ content }: { content: string | TrustedHTML }) => {
  return <span className="mb-3  text-3xl font-normal text-bloodhunt-red" dangerouslySetInnerHTML={{ __html: content }}></span>;
};
