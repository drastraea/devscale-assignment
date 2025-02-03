import { contentFetch } from "@admin/_services/content-fetch";
import Header from "./_components/header";
import ContentLists from "./_components/content-lists";
import SideNav from "./_components/nav";
import { ConfirmDelete } from "./_components/confirmation-box";

export default async function Admin() {

    const { data } = await contentFetch();

    return (
        <main>
            <SideNav />
            <div className="home-content">
                <Header />
                <div className="content-table">
                    {data.map((item) => (
                        <div key={item._id} className="content-lists">
                            <ContentLists id={item._id} title={item.title} desc={item.desc} slug={item.slug} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}