"use client";
import { useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Instagram from "@/components/Instagram";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send the message.");
            }
        } catch (error) {
            console.error(error);
            setStatus("An error occurred. Please try again.");
        }
    };

    return (
        <section className="max-w-md mx-auto p-12 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Mande uma mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Sua mensagem (max 250 caracteres)"
                    maxLength={250}
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Send Message
                </button>
                {status && <p className="text-center text-sm mt-2">{status}</p>}
            </form>
            <div className="flex items-start flex-col justify-between mt-4 lg:flex-row lg:items-center gap-2">
                <Link
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                >
                    <Instagram />
                    <span className="ml-2">Siga no Instagram</span>
                </Link>
                <Link
                    href="mailto:contato@bethgaviao.com"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    Envie um Email
                </Link>
            </div>
        </section>
    );
}
