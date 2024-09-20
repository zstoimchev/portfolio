import Image from "next/image";

export default function About() {
    return (
        <div
            className="content flex flex-col mt-20 items-center sm:items-center sm:p-20 font-[family-name:var(--font-vt323-regular)]">

            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl  font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold font-[family-name:var(--font-vt323-regular)]">&gt;_ Lets Talk</h1>
                    <p className="text-sm text-gray-500 mt-4">Have some idea to develop and need help? Then
                        reach out, I am always more than happy to help.</p>

                    <div className="mt-12">
                        <h2 className="text-gray-400 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://github.com/zstoimchev" target="_blank" rel="noopener noreferrer">
                                        <Image src="../../mail-logo.svg" alt="Mail logo" width={25} height={25}/>
                                    </a>
                                </li>
                                <a href="mailto:zstoimchev@outlook.com" className="text-[#007bff] text-sm ml-4">
                                    <strong>info@zstoimchev.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-400 text-base font-bold">Socials</h2>
                        <ul className="flex mt-4 space-x-4">
                            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://github.com/zstoimchev" target="_blank" rel="noopener noreferrer">
                                    <Image src="../../github-logo.svg" alt="GitHub logo" width={25} height={25} />
                                </a>
                            </li>
                            <li className="h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://linkedin.com/in/zstoimchev" target="_blank" rel="noopener noreferrer">
                                    <Image src="../../linkedin-logo.svg" alt="LinkedIn logo" width={25} height={25} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="ml-auto space-y-4">
                    <input type='text' placeholder='Name'
                           className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <input type='email' placeholder='Email'
                           className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <input type='text' placeholder='Subject'
                           className="w-full rounded-md py-3 px-4 bg-gray-800 text-sm outline-blue-500 focus:bg-transparent"/>
                    <textarea placeholder='Message' rows={6}
                              className="w-full rounded-md px-4 bg-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"></textarea>
                    <button type='button'
                            className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6">Send
                    </button>
                </form>
            </div>

        </div>)
}