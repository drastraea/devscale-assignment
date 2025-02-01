"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitContent from "../_services/content-submit";
import TipTap from "@/components/TipTapEditor/TipTap";

export default function ContentForm({ postData }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        title: postData?.title || "",
        desc: postData?.desc || "",
        content: postData?.content || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleEditorChange = (value) => {
        setFormData(prev => ({
            ...prev,
            content: value
        }));
    };

    const validateForm = () => {
        if (!formData.title.trim()) {
            setError("Title is required");
            return false;
        }
        if (!formData.content.trim()) {
            setError("Content is required");
            return false;
        }
        return true;
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setError("");

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        try {
            const form = new FormData();
            form.append("title", formData.title);
            form.append("desc", formData.desc);
            form.append("content", formData.content);

            if (postData?._id) {
                form.append("id", postData._id);
                await SubmitContent(form, "PUT");
            } else {
                await SubmitContent(form, "POST");
            }

            router.push("/admin");
        } catch (err) {
            setError(err.message || "An error occurred while submitting the form");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            <div className="space-y-6">
                <div className="form-group">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title *
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-1">
                        Description
                    </label>
                    <input
                        type="text"
                        id="desc"
                        name="desc"
                        value={formData.desc}
                        onChange={handleChange}
                        placeholder="Enter description"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                        Content *
                    </label>
                    <TipTap 
                        value={formData.content} 
                        onChange={handleEditorChange}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-2 text-white rounded transition-colors
                        ${isSubmitting 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600'
                        }`}
                >
                    {isSubmitting 
                        ? 'Submitting...' 
                        : postData 
                            ? "Update Post" 
                            : "Create Post"
                    }
                </button>
            </div>
        </form>
    );
}