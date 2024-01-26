export default function Footer({children}) {
    return (
        <>
            <footer className="py-6 md:py-8">
                <div className="container mx-auto">
                    <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
                        {children}
                    </p>
                </div>
            </footer>
        </>
    )
}