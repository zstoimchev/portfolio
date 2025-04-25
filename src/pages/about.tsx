export default function About() {
    return (
        <div className="flex flex-col mt-10 gap-10 items-center sm:items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-vt323-regular)]">
            <h1 className="custom-title-page">&lt; About me &gt;</h1>

            <div className="widdd space-y-8">
                <div>
                    <h1 className="text-2xl">&gt;_ system_profile</h1>
                    <p className="text-justify leading-relaxed">
                        I'm Zhivko, a Computer Science student building resilient systems by day and probing their weaknesses by night.
                        My journey began with tearing apart Windows machines, evolved through Linux distro-hopping, and now focuses on
                        architecting secure infrastructure. When I'm not wrestling with Kubernetes pods or hardening Proxmox clusters,
                        you'll find me translating my Bash scripts into Rust - because why make things easy?
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl">&gt;_ operational_parameters</h1>
                    <p className="text-justify leading-relaxed">
                        My homelab is a living lab where I deploy everything from Nextcloud storage to intentionally vulnerable
                        machines for security testing. Through building .NET/Spring APIs and React frontends, I've learned that
                        simplicity beats cleverness - hence my obsession with the KISS principle. This philosophy extends to my
                        network setups, where I implement layered defenses (pfSense, IDS, NAC) while keeping configurations
                        human-readable.
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl">&gt;_ security_audit</h1>
                    <p className="text-justify leading-relaxed">
                        Cybersecurity isn't just a career path - it's a mindset. I methodically study OWASP Top 10 vulnerabilities
                        through controlled environments, then apply those lessons to harden my systems. Whether configuring firewall
                        rules, analyzing Wireshark traffic, or practicing ethical hacking with Kali tools, I believe true security
                        comes from understanding both how systems work and how they break.
                    </p>
                </div>

                <div>
                    <h1 className="text-2xl">&gt;_ contact_protocol</h1>
                    <p className="text-justify leading-relaxed">
                        Want to debate Rust's borrow checker versus Java's GC? Need help convincing your router it needs more than
                        "admin/password" credentials? Just appreciate someone who understands why you name servers after Tolkien
                        characters? I'm always open for tech discussions, collaboration, or just comparing homelab war stories.
                        Reach me at <a href="mailto:zstoimchev@outlook.com" className="text-blue-400 hover:underline">zstoimchev@outlook.com</a> or
                        connect on <a href="https://linkedin.com/in/zstoimchev" className="text-blue-400 hover:underline">LinkedIn</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}