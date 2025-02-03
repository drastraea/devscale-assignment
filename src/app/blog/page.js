import SideNav from "@/components/SideNav";
import { contentFetch } from "@app/_services/fetchContent";
import ContentLists from "@app/_components/content-lists";

export default async function Home() {

    const { data } = await contentFetch();

    return (
        <main>
            <SideNav />
            <div className="home-content">
                {data.map((item) => (
                    <div key={item._id}>
                        <ContentLists title={item.title} desc={item.desc} slug={item.slug} />
                    </div>
                ))}
            </div>
        </main>
    );
}
