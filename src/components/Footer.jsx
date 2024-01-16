export default function Footer({children}) {
    return (
        <>
            <footer className="py-6 md:py-8">
                <div className="container mx-auto">
                    <p className="text-center text-base text-gray-500">
                        {children}
                    </p>
                </div>
            </footer>
        </>
    )
}