"use client";

import { useEffect, useState } from "react";
import PrismLoader from "@/components/PrismLoader";
import SideNav from "@/components/SideNav";

export default function Content({ post, postContent }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        setContent(postContent.__html);
    }, [postContent]);

    if (!content) return <p>Loading...</p>;

    return (
        <div>
            <article className="prose-base max-w-3xl">
                <h1 className="font-semibold text-2xl">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-8">{post.desc}</p>
                <div className="mt-6" dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            <PrismLoader />
        </div>
    );
}
