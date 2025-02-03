"use server";

import { revalidatePath } from "next/cache";

const API_URL = process.env.API_URL;

export default async function SubmitContent(formData, method = "POST") {
    const title = formData.get("title")?.trim();
    const desc = formData.get("desc")?.trim();
    const content = formData.get("content")?.trim();
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

    const headers = { 'Content-Type': 'application/json' };
    
    let body;
    if (method === "PUT") {
        const id = formData.get("id");
        if (!id) {
            throw new Error("ID is required for updating a post");
        }
        body = JSON.stringify({ _id: id, title, desc, content, slug });
    } else if (method === "POST") {
        body = JSON.stringify([{ title, desc, content, slug }]);
    } else {
        throw new Error("Invalid method");
    }

    const options = { method, headers, body };
    const res = await fetch(API_URL, options);

    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        const errorMessage = errorData?.message || `Failed to ${method === "PUT" ? "update" : "create"} post`;
        return { success: false, message: errorMessage };
    }

    revalidatePath('admin')
    return { success: true, message: `Content ${title} created` };
}
