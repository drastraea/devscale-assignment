import Header from "@admin/_components/header";
import ContentForm from "@admin/_components/content-form";
import SideNav from "@admin/_components/nav";

export default function New() {
    return (
        <main>
            <SideNav />
            <div className="content-form">
                <Header />
                <ContentForm />
            </div>
        </main>
    );
}