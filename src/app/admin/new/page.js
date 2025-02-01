import Nav from "@admin/_components/nav";
import Header from "@admin/_components/header";
import ContentForm from "@admin/_components/content-form";

export default function New() {
    return (
        <div>
            <Nav />
            <main className="main-content">
                <Header />
                <ContentForm />
            </main>
        </div>
    );
}