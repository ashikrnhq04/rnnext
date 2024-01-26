export default function Navbar({logo, children}) {
    return (
        <>
            <nav className="py-6 md:py-8">
                <div className="container mx-auto flex items-center justify-between gap-x-6">
                    <a href="/">
                        <img className="h-[45px]" src={logo} alt="Lws"/>
                    </a>
                    {children}
                </div>
            </nav>
        </>
    )
}