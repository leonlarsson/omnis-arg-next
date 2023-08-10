export default ({ title }: { title: string | TrustedHTML }) => {
  return <span className="mb-3  text-3xl font-normal text-bloodhunt-red" dangerouslySetInnerHTML={{ __html: title }}></span>;
};
