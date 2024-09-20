export default function About() {
    return (
        <div
            className="flex flex-col mt-20 items-center sm:items-center sm:p-20 font-[family-name:var(--font-vt323-regular)]">

            {/*<h1 className="text-2xl">This is CONTACT page!</h1>*/}


            <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl  font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Lets Talk</h1>
                    <p className="text-sm text-gray-500 mt-4">Have some idea to develop and need help? Then
                        reach out, I am always more than happy to help.</p>

                    <div className="mt-12">
                        <h2 className="text-gray-400 text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div
                                    className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                         viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000"/>
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                    {/*<small className="block">Mail</small>*/}
                                    <strong>info@zstoimchev.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-gray-400 text-base font-bold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="https://linkedin.com/in/zstoimchev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                         viewBox="0 0 511 512">
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000"/>
                                    </svg>
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