import Header from "@admin/_components/header";
import ContentForm from "@admin/_components/content-form";
import SideNav from "@admin/_components/nav";

export default async function Edit({ params }) {
    const { id } = await params;
    const res = await fetch(`https://v1.appbackend.io/v1/rows/dItFYBosK89S/${id}`);
    const postData = await res.json();

    if (!postData) {
        console.log(postData, id)
        return <p>Post not found</p>;
    }

    return (
        <main>
            <SideNav />
            <div className="content-form">
                <Header />
                <ContentForm title={postData.title} id={postData._id} content={postData.content} desc={postData.desc} slug={postData.slug} />
            </div>
        </main>
    );
}
