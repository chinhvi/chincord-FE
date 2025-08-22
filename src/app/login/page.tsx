"use client";

import { useState } from "react";
import { webUrl} from "@/app/utils/web-url";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            // fetch API login will be here
            setTimeout(() => {
                window.location.href = webUrl.global;
                
            }, 500)

        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
            >
                {error && (
                    <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
                )}

                <div className="mb-4">
                    {/*<label className="block mb-2 text-sm font-medium">Name</label>*/}
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-fit bg-blue-500 text-white px-2 py-1 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                    {loading ? "Joining..." : "Join"}
                </button>
            </form>
        </div>
    );
}
