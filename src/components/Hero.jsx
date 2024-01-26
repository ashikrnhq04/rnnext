

export default function Hero({children, heroImage}) {
    return (
        <>
            <section className="pb-[114px] pt-20 md:mt-[100px]">
                <div className="container lg:px-20">
                    <div className="grid items-center gap-6 md:grid-cols-2">
                        <div className="flex justify-center md:order-2">
                            <img className="max-md:w-full" src={heroImage} width="326" height="290" alt="frame"/>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}