import Content from "../_components/content";
import NavHeader from "@/components/nav";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

// Server Component: Fetch data during rendering on the server
export default async function BlogContent({ params }) {
    const { slug } = await params;

    // Fetch data for the post on the server side
    const res = await fetch(`${NEXT_PUBLIC_API_URL}?filterKey=slug&filterValue=${slug}`);
    const { data } = await res.json();

    if (data.length === 0) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <NavHeader />
            <main className="main-content">
                <Content post={data[0]} postContent={{ __html: data[0].content }} />
            </main>
        </div>
    );
}
