import Search from "./Search.jsx";
import Students from "./Students.jsx";

export default function Container({children}) {
    return (
        <>
            <section className="py-24 lg:pt-[120px] lg:pb-28">
                <div className="container">
                    {children}
                </div>
            </section>
        </>
    )
}