import Nav from "@admin/_components/nav";
import Header from "@admin/_components/header";
import ContentForm from "@admin/_components/content-form";

// Server Component
export default async function Edit({ params }) {
    const { id } = await params;
    const res = await fetch(`https://v1.appbackend.io/v1/rows/dItFYBosK89S/${id}`);
    const postData = await res.json();

    if (!postData) {
        return <p>Post not found</p>;
    }

    return (
        <div>
            <Nav />
            <main className="main-content">
                <Header />
                <ContentForm postData={postData} /> {/* Pass postData to the client component */}
            </main>
        </div>
    );
}
