"use client"
export default function Topbar() {
    return <div className="place-items-center grid">
        <div className="max-w-screen-xl w-full bg-black  align-center px-5 pb-5 ">
            <img src="/logo-without-bg.png" alt="" className="h-80" />
            {/* <div className="text-8xl text-white">
                Daily code */}
            {/* </div> */}
            <Navbar />
        </div>

    </div>
}

const topbarItems = [
    {
        title: "About",
        route: "/about"
    },
    {
        title: "Activity",
        route: "/activity"
    },
    {
        title: "Problems",
        route: "/problmes"
    },
    {
        title: "Leaderboard",
        route: "/leaderboard"
    }
]
export function Navbar() {
    return <div className="flex">
        {topbarItems.map(items => <NavbarItems route={items.route} title={items.title} />)}
    </div>
}

export function NavbarItems({ title, route }: {
    title: string,
    route: string
}) {
    return <div className="mr-10 text-white/80 text-lg cursor-pointer hover:text-white text-base font-light">
        {title}
    </div>
}