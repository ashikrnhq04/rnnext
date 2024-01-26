export default function Button({disable,skin, type, clickEvent, link, children}) {
    let color = "";
    if(!link) {
        color = skin === 'red' ? "bg-red-500" : skin === 'blue' ? "bg-blue-500" : skin === 'white' ? "bg-white text-black" : "text-black";
    } else {
        color = skin === 'red' ? "text-red-500" : skin === 'blue' ? "text-blue-500" : skin === 'white' ? "text-white" : "text-black";
    }

    if(disable) {
        color = "bg-[#333]";
    }

    return (
        <>
            <button disabled={disable} type={type} onClick={clickEvent} className={`${color} ${!link ? "px-3.5" : ""}  rounded-md py-2.5 text-sm font-semibold`}>
                {children}
            </button>
        </>
    )
}