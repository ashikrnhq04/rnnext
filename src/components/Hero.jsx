import Button from "./parts/Button.jsx";
import heroImage from "./../assets/hero-graphics.svg";


export default function Hero ({children}) {
    return (
        <>
            <section
                className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 -mt-[92px] md:-mt-[118px]"
            >
                <div className="container">
                    <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
                        <img
                            className="md:order-2 object-cover ml-auto animate-updown"
                            src={heroImage}
                            width="500px"
                            height="500px"
                            alt="Banner"
                        />
                        <div>
                            {children}
                            <Button link={"/"}>
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}