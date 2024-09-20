export default function Home() {
    return (
        <div className="flex flex-col mt-10 gap-10 items-center sm:items-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-vt323-regular)]">
            <div className="gap-0 items-center flex flex-col">
                <p>Hello friend, glad you are here! My  name is</p>
                {/*<h1 className="text-8xl">&#123;&quot; Zhivko Stoimchev &quot;&#125;</h1>*/}
                <h1 className="text-8xl">&lt; Zhivko Stoimchev &gt;</h1>
            </div>

            <div className="gap-0 items-center flex flex-col">
                <p>I am working as</p>
                <h1 className="text-7xl">&#123;&quot; Developer &quot;&#125;</h1>
            </div>
            {/*<h1 className="text-7xl">{" Zhivko Stoimchev "}</h1>*/}
        </div>
    );
}
