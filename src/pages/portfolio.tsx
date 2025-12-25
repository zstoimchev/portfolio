import React, {useEffect, useState} from 'react';
import Image from "next/image";
import type { Project as PrismaProject } from '@/generated/prisma/client';

export default function Portfolio() {
    const [projects, setProjects] = useState<PrismaProject[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/projects")
            .then((res) => res.json())
            .then((data: PrismaProject[]) => {
                setProjects(data);
                setLoading(false);
                console.log(data);
            });
    }, []);

    if (loading) return <p>Loading...</p>;

    return (<div
        className="flex flex-col mt-10 gap-10 items-center sm:items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-vt323-regular)]">
        <h1 className="custom-title-page">&lt; Portfolio &gt;</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((item, index) => (
                <div key={index}
                     className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
                    <a href="#">
                        <Image
                            className="rounded-t-lg h-[250px] w-full object-cover"
                            src={item.image_url}
                            alt={item.name}
                            width={400}
                            height={300}
                        />
                    </a>
                    <div className="p-5 flex flex-col flex-grow">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
                            {item.description}
                        </p>
                        <div className="mt-auto">
                            <a href={item.github_url}
                               className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more on GitHub
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>);
}