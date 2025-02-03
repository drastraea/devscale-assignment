import Nav from "./_components/nav";
import { contentFetch } from "@admin/_services/content-fetch";
import Header from "./_components/header";
import ContentLists from "./_components/content-lists";

export default async function Admin() {

    const data = await contentFetch();

    return (
        <div>
            <Nav />
            <main>
                <div className="main-content">
                    <Header />
                    <ContentLists data={data} />
                </div>
            </main>
        </div>
    );
}