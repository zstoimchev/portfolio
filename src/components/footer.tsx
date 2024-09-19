import Link from "next/link";

export default function Footer() {

    return (
        <>
            <footer className="bg-gray-800 p-4 mt-4 content">
                <div className="container mx-auto text-center text-white">
                    <p>© 2024 Zhivko Stoimchev. All rights reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <Link href="/#" className="text-amber-200">Privacy Policy</Link>
                        <Link href="#" className="text-amber-200">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
