export default function Button ({link, children, skin}) {

    let classname = `px-5 py-2.5 ${skin == 'black' ? 'bg-[#172227]' : 'bg-[#038C61]'} rounded-[44px]`;
    return (
        <>
            <a className={classname} href={link}>
                {children}
            </a>
        </>
    )
}