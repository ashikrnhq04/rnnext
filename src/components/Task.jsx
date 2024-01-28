import color from "../color.js";
import {FaRegStar, FaStar} from "react-icons/fa";
import Button from "./Button.jsx";
import {useContext} from "react";
import {tasksDispatch, tasksFormStatus} from "../context/index.jsx";
import {toast} from "react-toastify";

export default function Task({task, handleedit}) {
    let dispatch = useContext(tasksDispatch);
    let {id, title, description, tags, priority, isFavourite} = task;
    let {formMode, setFormMode} = useContext(tasksFormStatus);
    let renderTags = tags?.map((tag, index) => {
        let colorIndex = index + 1  === tags.length ? Math.floor(Math.random() * (color.length - 1)) : index;
        return (
            <li key={tag}>
                <span className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${color[colorIndex]}  px-2.5 text-sm text-[#F4F5F6]`}>{tag.toLowerCase()}
                    </span>
            </li>
        );
    });

    function handleIsFavourite(id, status) {
        dispatch({
            type: 'favourite',
            id
        });
        if(status) {
            toastRemovedFromFavourite();
        } else {
            toastAddedAsFavourite();
        }
    }

    const toastAddedAsFavourite = () => {
        toast.success("Your task added into favourite list.");
    }
    const toastRemovedFromFavourite = () => {
        toast.info("Your task has removed from favourite list.");
    }
    const deleted = () => {
        toast.info("Your task has been removed from the list.");
    }

    function handleDelete(id) {
        dispatch({
            type: "delete",
            id
        });
        deleted();

    }

    return (
        <>
            <tr key={id} className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                <td className="hover:cursor-pointer" onClick={() => handleIsFavourite(id, isFavourite)}>
                    {isFavourite ? <FaStar color={'yellow'} /> : <FaRegStar color={'yellow'}/>}
                </td>
                <td>{title}</td>
                <td>
                    <div>
                        {description}
                    </div>
                </td>
                <td>
                    <ul className="flex justify-center gap-1.5 flex-wrap">
                        {renderTags}
                    </ul>
                </td>
                <td className="text-center capitalize">{priority}</td>
                <td>
                    <div className="flex items-center justify-center space-x-3">
                        <Button clickEvent={() => handleDelete(id)} link skin={"red"}>Delete</Button>
                        <Button link skin={"white"} clickEvent={() => {
                            handleedit(task);
                            setFormMode('edit');}}>Edit</Button>
                    </div>
                </td>
            </tr>
        </>
    )
}