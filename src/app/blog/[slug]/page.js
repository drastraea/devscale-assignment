import SideNav from "@/components/SideNav";
import Content from "../_components/content";

const API_URL = process.env.API_URL;

export default async function BlogContent({ params }) {
    const { slug } = await params;

    const res = await fetch(`${API_URL}?filterKey=slug&filterValue=${slug}`);
    const { data } = await res.json();

    if (data.length === 0) {
        return <p>Post not found</p>;
    }

    return (
        <main>
            <SideNav />
            <div className="article">
                <Content post={data[0]} postContent={{ __html: data[0].content }} />
            </div>
        </main>
    );
}
