export default function Heading({children}) {
    return (
        <h1 className="text-4xl lg:text-[56px] font-bold leading-[1.1] mb-8">
            {children}
        </h1>
    )
}