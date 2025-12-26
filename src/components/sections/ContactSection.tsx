'use client';

import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
    visible: boolean;
}

type CalloutState = {
    success: boolean;
    message: string;
} | null;

export default function Contact({ visible }: ContactProps) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [callout, setCallout] = useState<CalloutState>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setCallout(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setCallout({ success: true, message: data.message });
                setForm({ name: '', email: '', subject: '', message: '' });
            } else {
                setCallout({ success: false, message: data.message });
            }
        } catch {
            setCallout({
                success: false,
                message: 'Something went wrong. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className={`min-h-screen flex items-center justify-center px-6 py-20 transition-all duration-1000 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="max-w-4xl w-full">
                <h2 className="text-6xl font-bold mb-12 text-emerald-400 text-center">
                    {'>'}_get_in_touch
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left */}
                    <div className="space-y-6">
                        <h3 className="text-3xl mb-4 text-cyan-400">{'//'} Let{"'"}s Connect</h3>
                        <p className="text-gray-400 mb-6 text-2xl">
                            Want to debate Rust{"'"}s borrow checker versus Java{"'"}s GC? Need help with
                            security configurations? Just appreciate good tech discussions? Let{"'"}s talk!
                        </p>

                        <a
                            href="mailto:zstoimchev@gmail.com"
                            className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-xl"
                        >
                            <Mail size={20} /> zstoimchev@gmail.com
                        </a>

                        <a
                            href="https://github.com/zstoimchev"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-xl"
                        >
                            <Github size={20} /> github.com/zstoimchev
                        </a>

                        <a
                            href="https://linkedin.com/in/zstoimchev"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 text-xl"
                        >
                            <Linkedin size={20} /> linkedin.com/in/zstoimchev
                        </a>
                    </div>

                    {/* Form */}
                    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {callout && (
                                <div
                                    className={`rounded-md px-4 py-3 text-sm ${
                                        callout.success
                                            ? 'bg-green-600'
                                            : 'bg-red-600'
                                    }`}
                                >
                                    {callout.message}
                                </div>
                            )}

                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-xl"
                            />

                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-xl"
                            />

                            <input
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-xl"
                            />

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows={4}
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-xl"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded"
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
