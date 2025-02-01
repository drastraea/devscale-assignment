"use client";

import { useEffect, useState } from "react";
import PrismLoader from "@/components/PrismLoader";

export default function Content({ post, postContent }) {
    const [content, setContent] = useState(null);

    useEffect(() => {
        // Only set content after component mounts to avoid SSR mismatch
        setContent(postContent.__html);
    }, [postContent]);

    if (!content) return <p>Loading...</p>; // Ensure content is available before rendering

    return (
        <div>
            <article className="prose-base">
                <h1 className="font-semibold text-2xl">{post.title}</h1>
                <p className="text-gray-500 text-sm mb-8">{post.desc}</p>
                {/* Use client-side content rendering */}
                <div className="mt-6" dangerouslySetInnerHTML={{ __html: content }} />
            </article>
            <PrismLoader />
        </div>
    );
}
