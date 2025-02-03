import SideNav from "@/components/SideNav";

export default async function Home() {

    return (
        <main>
            <SideNav />
            <div className="home-content">
                <h1 className="text-3xl font-semibold">Sam Space</h1>
                <p className="mt-2 text-lg">
                    Hello, I&apos;m Samuel. I&apos;m a <strong>Devscale student</strong> where I learn full-stack web development using Next.js.
                </p>
            </div>
        </main>
    );
}
