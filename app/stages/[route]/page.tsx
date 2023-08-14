import Input from "../../components/Input";
import Title from "../../components/Title";
import { routes } from "../../data";

// TODO: Add some sort of mechanism to allow hiding things in the HTML. Maybe a "hidden" element?

export const generateMetadata = ({ params }: { params: { route: string } }) => ({
  title: routes.find(route => route.pathname === params.route)?.documentTitle ?? "The Omnis Challenge"
});

export default ({ params }: { params: { route: string } }) => {
  const route = routes.find(route => route.pathname === params.route);

  if (!route) return <span>404</span>;

  return (
    <div className="flex flex-col gap-1">
      <Title title={route.title} titleIsHtml={route.titleIsHtml} titleEmote={route.titleEmote} />
      <Input route={route.pathname} />
    </div>
  );
};
