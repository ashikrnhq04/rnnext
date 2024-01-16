export default function Logo({alt, logo}) {
    return (
        <>
            <img
                className="h-[40px]"
                src={logo}
                alt={alt}
            />
        </>
    )
}