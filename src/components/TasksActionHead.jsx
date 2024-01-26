export default function TasksActionHead({heading, children}) {

    return (
        <>
            <div className="mb-14 items-center justify-between sm:flex">
                <h2 className="text-2xl font-semibold max-sm:mb-4">{heading}</h2>
                <div className="flex items-center space-x-5">
                    {children}
                </div>
            </div>
        </>
    )
}