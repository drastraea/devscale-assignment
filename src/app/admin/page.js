import Nav from "./_components/nav";
import Header from "./_components/header";
import ContentLists from "./_components/content-lists";

export default function Admin() {
    return (
        <div>
            <Nav />
            <main>
                <div className="main-content">
                    <Header />
                    <ContentLists />
                </div>
            </main>
        </div>
    );
}