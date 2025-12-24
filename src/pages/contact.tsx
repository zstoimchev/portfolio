import Image from "next/image";
import React, {useState} from "react";

export default function Contact() {
    type CalloutState = {
        success: boolean;
        message: string;
    } | null;

    const [callout, setCallout] = useState<CalloutState>(null);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
        setLoading(true);
        setCallout(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setCallout({success: true, message: data.message});
                setForm({name: "", email: "", subject: "", message: ""});
            } else {
                setCallout({success: false, message: data.message});
            }
        } catch {
            setCallout({success: false, message: "Something went wrong. Please try again later."});
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="content flex flex-col mt-20 items-center sm:items-center sm:p-20 font-[family-name:var(--font-vt323-regular)]">

            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl  font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold font-[family-name:var(--font-vt323-regular)]">&gt;_ Lets
                        Talk</h1>
                    <p className="text-sm text-gray-500 mt-4">Have some idea to develop and need help? Then
                        reach out, I am always more than happy to help.</p>

                    {/*<div className="mt-12">*/}
                    {/*    <h2 className="text-gray-400 text-base font-bold">Email</h2>*/}
                    {/*    <ul className="mt-4">*/}
                    {/*        <li className="flex items-center">*/}
                    {/*            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">*/}
                    {/*                <a href="https://github.com/zstoimchev" target="_blank" rel="noopener noreferrer">*/}
                    {/*                    <Image src="../../mail-logo.svg" alt="Mail logo" width={25} height={25}/>*/}
                    {/*                </a>*/}
                    {/*            </li>*/}
                    {/*            <a href="mailto:zstoimchev@outlook.com" className="text-[#007bff] text-sm ml-4">*/}
                    {/*                <strong>info@zstoimchev.com</strong>*/}
                    {/*            </a>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                    <div className="mt-12">
                        <h2 className="text-gray-400 text-base font-bold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://github.com/zstoimchev" target="_blank" rel="noopener noreferrer">
                                    <Image src="../../github-logo.svg" alt="GitHub logo" width={25} height={25}/>
                                </a>
                            </li>
                            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://linkedin.com/in/zstoimchev" target="_blank" rel="noopener noreferrer">
                                    <Image src="../../linkedin-logo.svg" alt="LinkedIn logo" width={25} height={25}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4">

                    {callout && (
                        <div
                            className={`relative mb-4 rounded-md px-4 py-3 text-sm ${
                                callout.success
                                    ? "bg-green-600 text-white"
                                    : "bg-red-600 text-white"
                            }`}
                        >
                            {callout.message}

                            <button
                                onClick={() => setCallout(null)}
                                className="absolute right-2 top-2 text-white opacity-80 hover:opacity-100"
                                aria-label="Close notification"
                            >
                                ✕
                            </button>

                        </div>
                    )}

                    <input
                        type='text'
                        placeholder='Name'
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />

                    <input
                        type='email'
                        placeholder='Email'
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />

                    <input type='text'
                           placeholder='Subject'
                           name="subject"
                           value={form.subject}
                           onChange={handleChange}
                           className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                    />

                    <textarea
                        placeholder='Message'
                        rows={6} name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full rounded-md px-4 bg-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                    />

                    <button
                        type='button'
                        onClick={handleSubmit}
                        disabled={loading}
                        className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>

                </form>
            </div>

        </div>)
}