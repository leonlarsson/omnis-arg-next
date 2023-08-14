export default ({ title, titleIsHtml, titleEmote }: { title: string; titleIsHtml?: boolean; titleEmote?: string }) => {
  if (titleIsHtml) return <span className="mb-3 whitespace-pre-line text-4xl font-medium text-bloodhunt-red" dangerouslySetInnerHTML={{ __html: title }} />;

  return (
    <span className="mb-3 whitespace-pre-line text-4xl font-medium text-bloodhunt-red">
      {title} {titleEmote && <i className={titleEmote} />}
    </span>
  );
};
