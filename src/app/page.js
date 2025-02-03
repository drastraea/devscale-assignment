import NavHeader from "../components/nav";
import { contentFetch } from "./_services/fetchContent";
import ContentLists from "./_components/content-lists";

export default async function Home() {

  const { data } = await contentFetch();

  return (
    <div>
      <NavHeader />
      <main className="main-content">
        <ContentLists data={data} />
      </main>
    </div>
  );
}
